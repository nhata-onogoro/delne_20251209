'use client'

import * as React from 'react'

type PrimitiveProps<T extends React.ElementType> = {
  as?: T
  asChild?: boolean
} & React.ComponentPropsWithoutRef<T>

function createPrimitive<T extends React.ElementType = 'div'>(
  defaultTag: T,
) {
  return React.forwardRef<React.ElementRef<T>, PrimitiveProps<T>>(function Primitive(
    { as, asChild: _asChild, ...props },
    ref,
  ) {
    const Comp = (as || defaultTag) as React.ElementType
    return <Comp ref={ref} {...(props as React.ComponentPropsWithoutRef<typeof Comp>)} />
  })
}

const DivPrimitive = createPrimitive('div')
const ButtonPrimitive = createPrimitive('button')
const SpanPrimitive = createPrimitive('span')
const ParagraphPrimitive = createPrimitive('p')
const HeadingPrimitive = createPrimitive('h2')
const InputPrimitive = createPrimitive('input')
const AnchorPrimitive = createPrimitive('a')

const Root = DivPrimitive
const Trigger = ButtonPrimitive
const Content = DivPrimitive
const Overlay = DivPrimitive
const Portal = ({ children }: React.PropsWithChildren) => <>{children}</>
const Close = ButtonPrimitive
const Title = HeadingPrimitive
const Description = ParagraphPrimitive
const Group = DivPrimitive
const Item = DivPrimitive
const ItemIndicator = SpanPrimitive
const Indicator = SpanPrimitive
const Label = createPrimitive('label')
const Separator = createPrimitive('div')
const Viewport = DivPrimitive
const Thumb = DivPrimitive
const Track = DivPrimitive
const Range = DivPrimitive
const Value = SpanPrimitive
const Icon = SpanPrimitive
const Link = AnchorPrimitive
const List = DivPrimitive
const Menu = DivPrimitive
const Header = DivPrimitive
const Slot = DivPrimitive
const Provider = ({ children }: React.PropsWithChildren) => <>{children}</>
const CheckboxItem = DivPrimitive
const RadioGroup = DivPrimitive
const RadioItem = DivPrimitive
const Input = InputPrimitive
const Sub = DivPrimitive
const SubTrigger = ButtonPrimitive
const SubContent = DivPrimitive
const ContentWrapper = DivPrimitive
const Anchor = AnchorPrimitive
const Arrow = DivPrimitive
const Corner = DivPrimitive
const ScrollAreaScrollbar = DivPrimitive
const ScrollAreaThumb = DivPrimitive
const ScrollDownButton = ButtonPrimitive
const ScrollUpButton = ButtonPrimitive
const Panel = DivPrimitive
const PanelGroup = DivPrimitive
const PanelResizeHandle = DivPrimitive
const Empty = DivPrimitive
const CollapsibleContent = DivPrimitive
const CollapsibleTrigger = ButtonPrimitive
const Legend = DivPrimitive
const Tooltip = DivPrimitive
const LegendProps = {}
const ItemText = SpanPrimitive

export {
  Anchor,
  Arrow,
  CheckboxItem,
  Close,
  CollapsibleContent,
  CollapsibleTrigger,
  Content,
  ContentWrapper,
  Corner,
  Description,
  Empty,
  Group,
  Header,
  Icon,
  Indicator,
  Input,
  Item,
  ItemIndicator,
  ItemText,
  Label,
  Legend,
  LegendProps,
  Link,
  List,
  Menu,
  Overlay,
  Panel,
  PanelGroup,
  PanelResizeHandle,
  Portal,
  Provider,
  RadioGroup,
  RadioItem,
  Range,
  Root,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollDownButton,
  ScrollUpButton,
  Slot,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Thumb,
  Title,
  Tooltip,
  Trigger,
  Value,
  Viewport,
}
