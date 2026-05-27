import { useFadeUp } from '../../hooks/useFadeUp';

/**
 * FadeUp
 * Wraps any children in a polymorphic element that fades-up into view
 * when it enters the viewport (powered by useFadeUp + CSS).
 *
 * Props:
 *  - tag       : HTML tag to render (default: 'div')
 *  - delay     : 1–5 shorthand that maps to .d1–.d5 CSS delay classes
 *  - className : additional class names
 *  - style     : inline styles
 *  - children  : React children
 */
export default function FadeUp({
  tag: Tag = 'div',
  delay = 0,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const ref = useFadeUp();
  const delayClass = delay ? `d${delay}` : '';

  return (
    <Tag
      ref={ref}
      className={['fu', delayClass, className].filter(Boolean).join(' ')}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
