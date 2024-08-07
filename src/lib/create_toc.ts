import { type MarkdownHeading } from 'astro';

export type Node = {
  depth: number;
  text: string;
  slug: string;
  children: Node[];
};

export function create_toc(headings: MarkdownHeading[]): Node[] {
  const dumb: Node = {
    depth: 0,
    text: '',
    slug: '',
    children: []
  };

  create_subtree(dumb, headings, 0);

  return dumb.children;
}

function create_subtree(
  parent: Node,
  headings: MarkdownHeading[],
  i: number
): number {
  while (i < headings.length) {
    const heading = headings[i];
    const node: Node = {
      text: heading.text,
      depth: heading.depth,
      slug: heading.slug,
      children: []
    };

    if (heading.depth <= parent.depth) {
      return i;
    }

    parent.children.push(node);
    i = create_subtree(node, headings, i + 1);
  }

  return headings.length;
}
