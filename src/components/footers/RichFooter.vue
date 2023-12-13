<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__addr">
      <h1 class="footer__logo">
        Acme Corporation
      </h1>

      <h2>Contact</h2>

      <address>
        5534 Somewhere In. The World 22193-10212<br>

        <a class="footer__btn" href="mailto:acme-inc@gmail.com">Email Us</a>
      </address>
    </div>

    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title">
          Media
        </h2>

        <ul class="nav__ul">
          <li>
            <a href="#">Online</a>
          </li>

          <li>
            <a href="#">Print</a>
          </li>

          <li>
            <a href="#">Alternative Ads</a>
          </li>
        </ul>
      </li>

      <li class="nav__item nav__item--extra">
        <h2 class="nav__title">
          Technology
        </h2>

        <ul class="nav__ul nav__ul--extra">
          <li>
            <a href="#">Hardware Design</a>
          </li>

          <li>
            <a href="#">Software Design</a>
          </li>

          <li>
            <a href="#">Digital Signage</a>
          </li>

          <li>
            <a href="#">Automation</a>
          </li>

          <li>
            <a href="#">Artificial Intelligence</a>
          </li>

          <li>
            <a href="#">IoT</a>
          </li>
        </ul>
      </li>

      <li class="nav__item">
        <h2 class="nav__title">
          Legal
        </h2>

        <ul class="nav__ul">
          <li>
            <a href="#">Privacy Policy</a>
          </li>

          <li>
            <a href="#">Terms of Use</a>
          </li>

          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </li>
    </ul>

    <div class="legal">
      <p>&copy; 2023 Acme Corporation. All rights reserved.</p>

      <div class="legal__links">
        <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  // color: #2f2f2f;
  background-color: var(--vwa-c-bg-alt);
  border-top: 1px solid var(--vwa-c-border);

  >* {
    flex: 1 100%;
  }

  address {
    font-style: normal;
    color: var(--vwa-c-text-3);
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    line-height: 2em;
  }

  a {
    text-decoration: none;
  }
}

.footer__addr {
  margin-right: 1.25em;
  margin-bottom: 2em;

  h2 {
    margin-top: 1.3em;
    font-size: 15px;
    font-weight: 400;
  }
}

.footer__logo {
  // font-family: 'Pacifico', cursive;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.5rem;
}

.nav__title {
  font-weight: 600;
  font-size: 15px;
}

.footer__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  // background-color: rgb(33, 33, 33, 0.07);
  // border-radius: 100px;
  color: var(--vwa-c-text-2);
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  // padding: 0 1.3em;
}

.footer__nav {
  display: flex;
  flex-flow: row wrap;

  >* {
    flex: 1 50%;
    margin-right: 1.25em;
  }
}

.nav__ul {
  a {
    color: var(--vwa-c-text-2);
    font-weight: 400;
  }
}

.nav__ul--extra {
  column-count: 2;
  column-gap: 1.25em;
}

.legal {
  display: flex;
  flex-wrap: wrap;
  // color: #999;
}

.legal__links {
  display: flex;
  align-items: center;
}

.heart {
  // color: #2f2f2f;
}

@media screen and (min-width: 24.375em) {
  .legal {
    .legal__links {
      margin-left: auto;
    }
  }
}

@media screen and (min-width: 40.375em) {
  .footer__nav {
    >* {
      flex: 1;
    }

    flex: 2 0px;
  }

  .nav__item--extra {
    flex-grow: 2;
  }

  .footer__addr {
    flex: 1 0px;
  }
}
</style>
