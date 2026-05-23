import { readFile } from 'node:fs/promises';
import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import {
  ogImageEntries,
  ogImageEntryBySlug,
  type OgImageEntry,
} from '../../lib/seo/og-images';

const WIDTH = 1200;
const HEIGHT = 630;

const regularFont = readFile(
  new URL(
    '../../../node_modules/@fontsource/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-400-normal.woff',
    import.meta.url,
  ),
);
const boldFont = readFile(
  new URL(
    '../../../node_modules/@fontsource/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-700-normal.woff',
    import.meta.url,
  ),
);

type ElementChild = string | number | ElementNode | ElementChild[];

type ElementNode = {
  type: string;
  props: Record<string, unknown>;
};

const el = (
  type: string,
  props: Record<string, unknown> = {},
  ...children: ElementChild[]
): ElementNode => {
  const style = props.style as Record<string, unknown> | undefined;

  return {
    type,
    props: {
      ...props,
      style:
        type === 'div' && style && !style.display
          ? { display: 'flex', ...style }
          : style,
      children: children.length === 1 ? children[0] : children.flat(),
    },
  };
};

const truncate = (value: string, maxLength: number) => {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1).trim()}...`;
};

const createOgCard = (entry: OgImageEntry) =>
  el(
    'div',
    {
      style: {
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fdf8f3',
        color: '#0f172a',
        fontFamily: 'Atkinson Hyperlegible',
        padding: '62px 70px',
        position: 'relative',
      },
    },
    el('div', {
      style: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '420px',
        height: '420px',
        backgroundColor: '#fde7bf',
        borderBottomLeftRadius: '420px',
      },
    }),
    el('div', {
      style: {
        position: 'absolute',
        right: '74px',
        bottom: '72px',
        width: '180px',
        height: '180px',
        borderRadius: '999px',
        border: '28px solid #f59e0b',
        opacity: 0.9,
      },
    }),
    el(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          maxWidth: '860px',
        },
      },
      el(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
          },
        },
        el('div', {
          style: {
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            backgroundColor: '#0f172a',
            boxShadow: '10px 10px 0 #f59e0b',
          },
        }),
        el(
          'div',
          {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
            },
          },
          el(
            'div',
            {
              style: {
                fontSize: '28px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              },
            },
            'LLCAtlas',
          ),
          el(
            'div',
            {
              style: {
                color: '#525a66',
                fontSize: '18px',
              },
            },
            entry.eyebrow,
          ),
        ),
      ),
      el(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
          },
        },
        el(
          'div',
          {
            style: {
              fontSize: entry.title.length > 62 ? '58px' : '64px',
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.055em',
              maxWidth: '920px',
            },
          },
          truncate(entry.title, 96),
        ),
        el(
          'div',
          {
            style: {
              color: '#3a3a3a',
              fontSize: '28px',
              lineHeight: 1.34,
              maxWidth: '820px',
            },
          },
          truncate(entry.description, 150),
        ),
      ),
    ),
    el(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      },
      el(
        'div',
        {
          style: {
            border: '1px solid #cbd5e1',
            borderRadius: '999px',
            color: '#3a3a3a',
            fontSize: '24px',
            padding: '14px 24px',
          },
        },
        'Plain-English LLC and tax decisions',
      ),
      el(
        'div',
        {
          style: {
            color: '#78350f',
            fontSize: '24px',
            fontWeight: 700,
          },
        },
        'llcatlas.com',
      ),
    ),
  );

export function getStaticPaths() {
  return ogImageEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

export const GET: APIRoute = async ({ params, props }) => {
  const entry =
    (props.entry as OgImageEntry | undefined) ??
    ogImageEntryBySlug.get(params.slug ?? '');

  if (!entry) {
    return new Response('OG image not found', { status: 404 });
  }

  const svg = await satori(createOgCard(entry), {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      {
        name: 'Atkinson Hyperlegible',
        data: await regularFont,
        weight: 400,
        style: 'normal',
      },
      {
        name: 'Atkinson Hyperlegible',
        data: await boldFont,
        weight: 700,
        style: 'normal',
      },
    ],
  });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};

