<template>
    <div class="apresentation">
        <p class="text-apresentation">{{ $t('titleApresentation') }}</p>
    </div>
</template>

<script>
export default {
  name: 'Apresentation',
  
}
</script>

<style scoped lang="scss"> 
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

p {
 font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
.text-apresentation{

    color:#c3c8cb;
    font-weight: bold;
    /* width: 50ch;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 2s steps(10), blinking 0.5s infinite step-end alternate;
     */
}

@keyframes typing {
    from {
        width:0;
    }
}
@keyframes blinking {
    50% {
        border-color: transparent;
    }
}
.apresentation{
    padding:0% 30% 0% 30%;
}
</style>