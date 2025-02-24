export enum PreviewCardPositionerDataAttributes {
  /**
   * Present when the preview card is open.
   */
  open = 'data-open',
  /**
   * Present when the preview card is closed.
   */
  closed = 'data-closed',
  /**
   * Present when the anchor is hidden.
   */
  anchorHidden = 'data-anchor-hidden',
  /**
   * Indicates which side the preview card is positioned relative to the trigger.
   * @type {'top' | 'bottom' | 'left' | 'right' | 'inline-end' | 'inline-start'}
   */
  side = 'data-side',
}
