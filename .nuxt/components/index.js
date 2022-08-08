export const AboutOne = () => import('../..\\components\\AboutOne.vue' /* webpackChunkName: "components/about-one" */).then(c => wrapFunctional(c.default || c))
export const BannerOne = () => import('../..\\components\\BannerOne.vue' /* webpackChunkName: "components/banner-one" */).then(c => wrapFunctional(c.default || c))
export const BlogDetailsPost = () => import('../..\\components\\BlogDetailsPost.vue' /* webpackChunkName: "components/blog-details-post" */).then(c => wrapFunctional(c.default || c))
export const BlogPost = () => import('../..\\components\\BlogPost.vue' /* webpackChunkName: "components/blog-post" */).then(c => wrapFunctional(c.default || c))
export const BlogStyleOne = () => import('../..\\components\\BlogStyleOne.vue' /* webpackChunkName: "components/blog-style-one" */).then(c => wrapFunctional(c.default || c))
export const BlogWithFilter = () => import('../..\\components\\BlogWithFilter.vue' /* webpackChunkName: "components/blog-with-filter" */).then(c => wrapFunctional(c.default || c))
export const BrandLogoCarousel = () => import('../..\\components\\BrandLogoCarousel.vue' /* webpackChunkName: "components/brand-logo-carousel" */).then(c => wrapFunctional(c.default || c))
export const Breadcrumb = () => import('../..\\components\\Breadcrumb.vue' /* webpackChunkName: "components/breadcrumb" */).then(c => wrapFunctional(c.default || c))
export const CommentForm = () => import('../..\\components\\CommentForm.vue' /* webpackChunkName: "components/comment-form" */).then(c => wrapFunctional(c.default || c))
export const ContactForm = () => import('../..\\components\\ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c))
export const Counterup = () => import('../..\\components\\Counterup.vue' /* webpackChunkName: "components/counterup" */).then(c => wrapFunctional(c.default || c))
export const EvProgram = () => import('../..\\components\\EvProgram.vue' /* webpackChunkName: "components/ev-program" */).then(c => wrapFunctional(c.default || c))
export const Features = () => import('../..\\components\\Features.vue' /* webpackChunkName: "components/features" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const GalleryWithFilter = () => import('../..\\components\\GalleryWithFilter.vue' /* webpackChunkName: "components/gallery-with-filter" */).then(c => wrapFunctional(c.default || c))
export const GelleryOne = () => import('../..\\components\\GelleryOne.vue' /* webpackChunkName: "components/gellery-one" */).then(c => wrapFunctional(c.default || c))
export const HeroOne = () => import('../..\\components\\HeroOne.vue' /* webpackChunkName: "components/hero-one" */).then(c => wrapFunctional(c.default || c))
export const HeroTwo = () => import('../..\\components\\HeroTwo.vue' /* webpackChunkName: "components/hero-two" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const MobileNavigation = () => import('../..\\components\\MobileNavigation.vue' /* webpackChunkName: "components/mobile-navigation" */).then(c => wrapFunctional(c.default || c))
export const Navigation = () => import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const OffCanvasMobileMenu = () => import('../..\\components\\OffCanvasMobileMenu.vue' /* webpackChunkName: "components/off-canvas-mobile-menu" */).then(c => wrapFunctional(c.default || c))
export const Products = () => import('../..\\components\\Products.vue' /* webpackChunkName: "components/products" */).then(c => wrapFunctional(c.default || c))
export const RelatedBlogPost = () => import('../..\\components\\RelatedBlogPost.vue' /* webpackChunkName: "components/related-blog-post" */).then(c => wrapFunctional(c.default || c))
export const SingleTeamMember = () => import('../..\\components\\SingleTeamMember.vue' /* webpackChunkName: "components/single-team-member" */).then(c => wrapFunctional(c.default || c))
export const SuccessComponent = () => import('../..\\components\\SuccessComponent.vue' /* webpackChunkName: "components/success-component" */).then(c => wrapFunctional(c.default || c))
export const TeamOne = () => import('../..\\components\\TeamOne.vue' /* webpackChunkName: "components/team-one" */).then(c => wrapFunctional(c.default || c))
export const Testimonial = () => import('../..\\components\\Testimonial.vue' /* webpackChunkName: "components/testimonial" */).then(c => wrapFunctional(c.default || c))
export const TheHeader = () => import('../..\\components\\TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c))
export const TheHeaderTwo = () => import('../..\\components\\TheHeaderTwo.vue' /* webpackChunkName: "components/the-header-two" */).then(c => wrapFunctional(c.default || c))
export const VideoCallToAction = () => import('../..\\components\\VideoCallToAction.vue' /* webpackChunkName: "components/video-call-to-action" */).then(c => wrapFunctional(c.default || c))

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
