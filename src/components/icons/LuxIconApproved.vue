<template>
  <g>
    <g>
      <path
        d="M9.5,16c-0.1,0-0.3,0-0.4-0.1l-2.5-2.5c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l2.2,2.2l7.1-6.7c0.2-0.2,0.5-0.2,0.7,0
          s0.2,0.5,0,0.7l-7.5,7C9.7,16,9.6,16,9.5,16z"
      />
    </g>
    <g>
      <path
        d="M12,24C5.4,24,0,18.6,0,12C0,5.4,5.4,0,12,0c6.6,0,12,5.4,12,12C24,18.6,18.6,24,12,24z M12,1C5.9,1,1,5.9,1,12
          s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1z"
      />
    </g>
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconApproved",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
    <div>
      <!-- you can pass in a smaller `width` and `height` as props -->
      <lux-icon-base width="12" height="12" icon-name="approved">
        <lux-icon-approved></lux-icon-approved>
      </lux-icon-base>
  
      <!-- or you can use the default, which is 18 -->
      <lux-icon-base icon-name="approved">
        <lux-icon-approved></lux-icon-approved>
      </lux-icon-base>
  
      <!-- or make it a little bigger too, with colors :) -->
      <lux-icon-base width="30" height="30" icon-name="approved" icon-color="red">
        <lux-icon-approved></lux-icon-approved>
      </lux-icon-base>
    </div>
  ```
</docs>
