<template>
  <text class="message">Now, let's use Vue.js to build your Weex app.</text>
</template>
<script>
  console.log(weex);
  const modal = weex.requireModule('modal');

  modal.toast({
      message: 'hello',
      duration: 3
  });

  console.log(weex.support('@component/slider'));
</script>