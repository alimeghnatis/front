export const THEME = [
  'heading',
  'paragraph',
  'label',
  'metadata',
  'anchor',
  // 'disabled',
  'far',
  'near',

  'error',
  'success',
  'warning',

  'selected',
  'important',
]

export const getColorMap = (
  prefix, list,
) => {
  const a = []
  list.forEach((color) => a.push({
    title :`${prefix}.${color}`,
    // subtitle:'',
    colors:[
      `var(--hard-${color})`,
      `var(--${color})`,
      `var(--soft-${color})`,
      `var(--on-${color})`,
    ],
  }))
  return a
}

export const themeMap = getColorMap(
  'colorschemes.theme', THEME,
)
