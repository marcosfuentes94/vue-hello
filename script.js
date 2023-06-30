const { createApp } = Vue;

const app = createApp({
    data() {
    return {
        title: 'Hello Vue!',
        image: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*zyNSb0UXhP8TfxYbj-GNWg.png'
    }
    }
});

app.mount('#app');