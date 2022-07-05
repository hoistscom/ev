export { default as AboutOne } from '../..\\components\\AboutOne.vue'
export { default as BannerOne } from '../..\\components\\BannerOne.vue'
export { default as BlogDetailsPost } from '../..\\components\\BlogDetailsPost.vue'
export { default as BlogPost } from '../..\\components\\BlogPost.vue'
export { default as BlogStyleOne } from '../..\\components\\BlogStyleOne.vue'
export { default as BlogWithFilter } from '../..\\components\\BlogWithFilter.vue'
export { default as BrandLogoCarousel } from '../..\\components\\BrandLogoCarousel.vue'
export { default as Breadcrumb } from '../..\\components\\Breadcrumb.vue'
export { default as CommentForm } from '../..\\components\\CommentForm.vue'
export { default as ContactForm } from '../..\\components\\ContactForm.vue'
export { default as Counterup } from '../..\\components\\Counterup.vue'
export { default as EvProgram } from '../..\\components\\EvProgram.vue'
export { default as Features } from '../..\\components\\Features.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as GalleryWithFilter } from '../..\\components\\GalleryWithFilter.vue'
export { default as GelleryOne } from '../..\\components\\GelleryOne.vue'
export { default as HeroOne } from '../..\\components\\HeroOne.vue'
export { default as MobileNavigation } from '../..\\components\\MobileNavigation.vue'
export { default as Navigation } from '../..\\components\\Navigation.vue'
export { default as OffCanvasMobileMenu } from '../..\\components\\OffCanvasMobileMenu.vue'
export { default as Products } from '../..\\components\\Products.vue'
export { default as RelatedBlogPost } from '../..\\components\\RelatedBlogPost.vue'
export { default as SingleTeamMember } from '../..\\components\\SingleTeamMember.vue'
export { default as TeamOne } from '../..\\components\\TeamOne.vue'
export { default as Testimonial } from '../..\\components\\Testimonial.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'
export { default as TheHeaderTwo } from '../..\\components\\TheHeaderTwo.vue'
export { default as VideoCallToAction } from '../..\\components\\VideoCallToAction.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
