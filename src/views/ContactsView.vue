<script setup lang="ts">
import { ref } from "vue";

const submit = ref();
const form = ref({ name: "", email: "", message: "", check: "" });

async function submitForm() {
  submit.value.setAttribute("disabled", true);
  alert("This form does not work. Please use GitHub Issues and Feature requests instead.");
  //   if (form.value.check === "vue") {
  //     // const res = await sendMessage(form);
  //     // if (res) {
  //     //  form.value = { name: "", email: "", message: "", check: "" };
  //     // }
  //   }
  //  else {
  //     // Incorrect 'captcha'
  //   }

  submit.value.removeAttribute("disabled");
}
</script>

<template>
  <div>
    <h2>Share your feedback</h2>
    <p>
      Thanks for sending us your ideas!
    </p>
    <p>
      <i>
        This form does not work. Please use
        <a href="https://github.com/vuesence/vue-webapp" target="_blank">
          GitHub Issues and Feature requests
        </a> instead.
      </i>
    </p>
    <!-- <div class="form-container"> -->
    <div class="form-container" action="action_page.php">
      <label for="fname">Your name</label>
      <input id="fname" v-model="form.name" type="text" name="firstname" placeholder="">

      <label for="lname">Your email or phone number</label>
      <input id="lname" v-model="form.email" type="text" name="lastname" placeholder="">

      <label for="subject">Message</label>
      <textarea id="subject" v-model="form.message" name="subject" placeholder="" />

      <label for="check">Enter word "vue"</label>
      <input id="check" v-model="form.check" type="text" name="check" placeholder="">

      <input ref="submit" type="submit" value="Submit" @click="submitForm">
    </div>
    <!-- <img class="picture" src="/images/3.jpg" /> -->
  </div>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.form-container {
  border-radius: 5px;
  // background-color: #f2f2f2;
  padding: 20px;
  text-align: left;

  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    // border: 1px solid var(--vwa-c-border);
    outline-color: var(--vwa-c-border-alt);
    border-radius: 4px;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    transition: 0.8s;

    &:focus,
    &:focus-visible {
      outline-color: var(--vwa-c-border-alt);
    }
  }

  textarea {
    height: 200px;
  }

  /* Style the submit button with a specific background color etc */
  input[type="submit"] {
    background-color: var(--vwa-c-brand-1);
    color: var(--vwa-c-bg-alt);
    padding: 10px 30px;
    // border: none;
    font-size: 1.1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    // &:hover {
    //   background-color: #6e478e;
    // }

    &[disabled] {
      opacity: 0.5;
      cursor: unset;
    }
  }
}
</style>
