<script setup lang="ts">
import { ref } from "vue";

// import Message from "vue-m-message";

// import { sendMessage } from "@/utils/messaging";
// import "vue-m-message/dist/style.css";

const submit = ref();
const form = ref({ name: "", email: "", message: "", check: "" });

async function submitForm() {
  submit.value.setAttribute("disabled", true);
  if (form.value.check === "фонд") {
    // const res = await sendMessage(form);
    // if (res) {
    // form.value = { name: "", email: "", message: "", check: "" };
    // }
  } else {
    // Message.error("Неверное проверочное слово", {
    //   // supportHTML: true,
    //   duration: 5000,
    //   position: "bottom-right",
    // });
  }

  submit.value.removeAttribute("disabled");
}
</script>

<template>
  <div>
    <h2>Обратная связь</h2>
    <p>
      Если вы хотите сделать пожертвование, или у вас есть какое-то предложение, напишите нам через форму ниже
      или по электронной почте:
      <a href="mailto:info@alterra-fond.ru">info@alterra-fond.ru</a>
    </p>
    <!-- <div class="form-container"> -->
    <div class="form-container" action="action_page.php">
      <label for="fname">Ваше имя</label>
      <input id="fname" v-model="form.name" type="text" name="firstname" placeholder="" />

      <label for="lname">Ваш email или телефон</label>
      <input id="lname" v-model="form.email" type="text" name="lastname" placeholder="" />

      <label for="subject">Сообщение</label>
      <textarea id="subject" v-model="form.message" name="subject" placeholder=""></textarea>

      <label for="check">Введите слово "фонд"</label>
      <input id="check" v-model="form.check" type="text" name="check" placeholder="" />

      <input ref="submit" type="submit" value="Submit" @click="submitForm" />
    </div>
    <img class="picture" src="/images/3.jpg" />
  </div>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.form-container {
  border-radius: 5px;
  // background-color: #f2f2f2;
  padding: 20px;

  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    outline-color: #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    transition: 0.8s;

    &:focus,
    &:focus-visible {
      outline-color: #6e478e;
    }
  }

  textarea {
    height: 200px;
  }

  /* Style the submit button with a specific background color etc */
  input[type="submit"] {
    background-color: #45166b;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #6e478e;
    }

    &[disabled] {
      opacity: 0.5;
      cursor: unset;

      &:hover {
        background-color: #45166b;
      }
    }
  }
}
</style>
