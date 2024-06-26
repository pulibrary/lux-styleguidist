<template>
  <component :is="type" :class="['lux-library-footer', theme]">
    <lux-wrapper class="lux-footer-content" :maxWidth="maxWidth">
      <div class="lux-footer-main">
        <div class="lux-library-links">
          <a href="https://library.princeton.edu"
            ><lux-library-logo width="142" height="40" :theme="value(theme)"
          /></a>
          <lux-library-contact-info :theme="value(theme)" />
        </div>
        <div class="lux-library-links">
          <h2>Subscribe to our Newsletter</h2>
          <lux-subscribe-newsletter type="div" :theme="value(theme)" />
          <div class="social-pul-icons">
            <a href="https://x.com/PULibrary"><lux-logo-x width="24" height="24" /></a>
            <a href="http://www.facebook.com/PULibrary"
              ><lux-logo-facebook width="24" height="24"
            /></a>
            <a href="https://www.instagram.com/PULibrary/"
              ><lux-logo-instagram width="24" height="24"
            /></a>
            <a href="https://libguides.princeton.edu/usgovdocs"
              ><lux-logo-gov-docs width="30" height="30"
            /></a>
            <a href="https://fpul.princeton.edu/"><lux-logo-friends width="120" height="35" /></a>
          </div>
        </div>
        <div class="lux-library-links">
          <nav role="navigation" aria-label="Library Staff">
            <ul>
              <li><a href="https://library.princeton.edu/staff">For Library Staff</a></li>
              <li><a href="https://library.princeton.edu/staff/directory">Staff Directory</a></li>
              <li>
                <a href="https://library.princeton.edu/about/jobs">Library Jobs</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="lux-footer-bottom">
        <div class="lux-library-links">
          <a href="http://accessibility.princeton.edu/help"
            ><lux-university-accessibility :theme="value(theme)"
          /></a>
        </div>
        <div class="lux-library-links">
          <lux-university-copyright type="div" :theme="value(theme)" />
        </div>
        <div class="lux-library-links pu-logo-white">
          <a href="https://www.princeton.edu"
            ><lux-logo-university-white width="200px" height="80px" type="div"
          /></a>
        </div>
      </div>
    </lux-wrapper>
  </component>
</template>

<script>
import LuxLibraryContactInfo from "./_LuxLibraryContactInfo.vue"
import LuxLibraryLogo from "./LuxLibraryLogo.vue"
import LuxLogoFacebook from "./logos/LuxLogoFacebook.vue"
import LuxLogoFriends from "./logos/LuxLogoFriends.vue"
import LuxLogoGovDocs from "./logos/LuxLogoGovDocs.vue"
import LuxLogoInstagram from "./logos/LuxLogoInstagram.vue"
import LuxLogoUniversityWhite from "./logos/LuxLogoUniversityWhite.vue"
import LuxLogoX from "./logos/LuxLogoX.vue"
import LuxSubscribeNewsletter from "./_LuxSubscribeNewsletter.vue"
import LuxUniversityAccessibility from "./_LuxUniversityAccessibility.vue"
import LuxUniversityCopyright from "./_LuxUniversityCopyright.vue"
import LuxWrapper from "./LuxWrapper.vue"

/**
 * LibraryFooter is the preferred Footer styling/behavior for PUL websites.
 * Don't forget to create a fallback for this component by providing the HTML
 * rendering in _<noscript></noscript>_ tags.
 */
export default {
  name: "LuxLibraryFooter",
  status: "ready",
  release: "1.0.0",
  type: "Pattern",
  components: {
    LuxLibraryContactInfo,
    LuxLibraryLogo,
    LuxLogoFacebook,
    LuxLogoFriends,
    LuxLogoGovDocs,
    LuxLogoInstagram,
    LuxLogoUniversityWhite,
    LuxLogoX,
    LuxSubscribeNewsletter,
    LuxUniversityAccessibility,
    LuxUniversityCopyright,
    LuxWrapper,
  },
  methods: {
    value: function (theme) {
      if (theme == "light" || theme == "shade") {
        return theme
      }
      return "dark"
    },
  },
  props: {
    /**
     * The html element name used for the container
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * The maximum width of the wrapper. Default is set to 1170.
     */
    maxWidth: {
      type: Number,
      default: 1170,
    },
    /**
     * Whether the header is dark, shade, or light. Default is set to dark.
     */
    theme: {
      type: String,
      default: "dark",
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/spacing.scss";
@import "../assets/styles/mixins.scss";
@import "../assets/styles/variables.css";
@import "../assets/styles/system.scss";
.lux-library-logo {
  padding-bottom: 2rem;
}
.lux-logo-x {
  margin: 0.5rem 0.1rem 0rem 0.2rem;
}

.lux-logo-facebook {
  margin: 0.5rem 0.2rem 0rem 0.1rem;
}

.lux-logo-instagram {
  margin: 0.5rem 0.25rem 0rem 0.2rem;
}

.lux-logo-gov-docs {
  margin: 0.5rem 0.1rem 0rem 0.3rem;
}

.lux-logo-friends {
  margin: 0.5rem 0.2rem -0.2rem 0.2rem;
}
.lux-library-footer {
  @include reset;
  @include stack-space(var(--space-base));
  font-family: var(--font-family-heading);
  line-height: var(--line-height-heading);
  color: var(--color-white);
  background: var(--color-gray-100);
  padding-top: 1em;
  padding-bottom: 1em;
  margin-top: 3em;

  &.dark {
    .lux-library-links a {
      text-decoration: none;
      color: var(--color-white);
    }
  }

  &.shade {
    background: var(--color-grayscale-darker);

    .lux-library-links a {
      text-decoration: none;
      color: var(----color-white);
    }
  }

  &.light {
    background: var(--color-white);

    .lux-library-links a {
      text-decoration: none;
      color: var(--color-rich-black);
    }
  }
}

.lux-footer-main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem 0rem;

  @media (min-width: 900px) {
    max-width: 1170px;
  }
  @media (max-width: 899px) {
    flex-direction: column;
  }
}

.lux-footer-bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem 0rem;

  @media (min-width: 900px) {
    max-width: 1170px;
  }
  @media (max-width: 899px) {
    flex-direction: column;
  }
}

.lux-footer-content {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  padding: 0rem 3rem 0rem 3rem;

  @media (min-width: 900px) {
    max-width: 1440px;
  }
}

.lux-library-links {
  order: 0;
  display: flex;
  flex-flow: column wrap;
  align-self: auto;
  justify-content: center;
  padding-bottom: 1em;
  @media (min-width: 900px) {
    flex: 1;
  }

  &.pu-logo-white {
    align-content: flex-end;
    @media (max-width: 899px) {
      align-content: flex-start;
    }
  }

  h2 {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-bold);
  }

  a {
    text-decoration: none;
    color: var(--color-white);

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0rem 2rem 0rem 0rem;
    display: flex;
    flex-flow: column wrap;
    align-content: flex-end;
    @media (max-width: 899px) {
      align-content: flex-start;
    }

    li {
      line-height: var(--line-height-base);
      font-size: var(--font-size-small);
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <lux-library-footer theme="dark"></lux-library-footer>
  </div>
  ```
</docs>
