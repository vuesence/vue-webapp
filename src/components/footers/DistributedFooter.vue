<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-left">
      <h3>ACME<span>logo</span></h3>

      <p class="footer-links">
        <a href="#">Home</a>
        ·
        <a href="#">Blog</a>
        ·
        <a href="#">Pricing</a>
        ·
        <a href="#">About</a>
        ·
        <a href="#">Faq</a>
        ·
        <a href="#">Contact</a>
      </p>

      <p class="footer-company-name">
        Acme Corporation © 2023
      </p>

      <div class="footer-icons">
        <a href="#">Fb</a>
        <a href="#">Tw</a>
        <a href="#">Ln</a>
        <a href="#">Gh</a>
      </div>
    </div>

    <div class="footer-right">
      <p>Contact Us</p>

      <form action="#" method="post">
        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  // box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  border-top: 1px solid #999;
  box-sizing: border-box;
  width: 100%;
  font: bold 16px sans-serif;
  text-align: left;
  padding: 50px 60px 40px;
  overflow: hidden;
  .footer-left {
    float: left;
  }
  h3 {
    color: var(--vwa-c-text-1);
    font-size: 36px;
    margin: 0 0 10px;
    span {
      color: var(--vwa-c-brand-1);
    }
  }
  .footer-links {
    color: var(--vwa-c-text-2);
    margin: 0 0 10px;
    padding: 0;
    a {
      display: inline-block;
      line-height: 1.8;
      text-decoration: none;
      color: inherit;
    }
  }
  .footer-company-name {
    color: var(--vwa-c-text-3);
    font-size: 14px;
    font-weight: normal;
    margin: 0;
  }
  .footer-icons {
    margin-top: 40px;
    a {
      display: inline-block;
      width: 35px;
      height: 35px;
      // cursor: pointer;
      background-color: var(--vwa-c-bg-alt);
      border-radius: 2px;
      font-size: 20px;
      color: var(--vwa-c-text-2);
      text-align: center;
      line-height: 35px;
      margin-right: 3px;
      margin-bottom: 5px;
    }
  }
  .footer-right {
    float: right;
    p {
      display: inline-block;
      vertical-align: top;
      margin: 15px 42px 0 0;
      color: var(--vwa-c-text-2);
    }
  }
  form {
    display: inline-block;
    input {
      display: block;
      border-radius: 3px;
      // box-sizing: border-box;
      // background-color: #d6d6d6;
      // box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
      // border: none;
      resize: none;
      font: inherit;
      // font-size: 14px;
      font-weight: normal;
      // color: #d1d2d2;
      width: 400px;
      padding: 18px;
      height: 55px;
      margin-bottom: 15px;
    }
    textarea {
      display: block;
      border-radius: 3px;
      // box-sizing: border-box;
      // background-color: hsl(0, 0%, 84%);
      box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
      // border: none;
      resize: none;
      font: inherit;
      font-size: 14px;
      font-weight: normal;
      // color: #d1d2d2;
      width: 400px;
      padding: 18px;
      height: 100px;
      margin-bottom: 20px;
    }
    button {
      border-radius: 3px;
      background-color: var(--vwa-c-bg-alt);
      // color: #555;
      // border: 0;
      padding: 15px 50px;
      font-weight: bold;
      float: right;
    }
  }

}
@media (max-width: 1000px) {
  .footer-distributed {
    font: bold 14px sans-serif;
    .footer-company-name {
      font-size: 12px;
    }
    form {
      input {
        width: 250px;
      }
      textarea {
        width: 250px;
      }
      button {
        padding: 10px 35px;
      }
    }
  }
}
@media (max-width: 800px) {
  .footer-distributed {
    padding: 30px;
    .footer-left {
      float: none;
      max-width: 300px;
      margin: 0 auto;
      margin-bottom: 40px;
    }
    .footer-right {
      float: none;
      max-width: 300px;
      margin: 0 auto;
    }
    form {
      margin-top: 30px;
      display: block;
      button {
        float: none;
      }
    }
  }
}
</style>
