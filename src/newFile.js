/* __placeholder__ */
// import { defineComponent, ref, computed } from "vue";
// export default defineComponent({
//   name: 'App',
//   components: {},
//   setup() {
//     const originalPrice = ref(100);
//     // const discount = ref(20);
//     const discount = ref(null);
//     console.log(originalPrice);       // RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: 100, _value: 100}
//     const finalPrice = computed(() => {
//       return originalPrice.value - discount.value;
//     });
//     return { originalPrice, discount, finalPrice };
//   },
// }) 
export default (await import('vue')).defineComponent({
data() {
return {
name: '',
email: '',
submissions: [],
};
},
methods: {
submitForm() {
const newSubmissions = {
name: this.name,
email: this.email,
};
},
showMessages() {
alert('Hello world');
}
}
});
