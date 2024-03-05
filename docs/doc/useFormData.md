# useFormData

表单数据 hook

## 使用

```ts
const { form, resetFields, assignFields } = useFormData<T>({
  name: "",
  age: 18,
  sex: null,
});

console.log(form.age); // 18
```

assignFields 方法示例

```ts
const object = {
  name: "name",
  age: 20,
  sex: 1,
  fullName: "fullName",
};
assignFields(object);

console.log(form);
// {
//   name: "name",
//   age: 20,
//   sex: 1,
// }
```

resetFields 方法示例

```ts
resetFields();

console.log(form);
// {
//   name: "",
//   age: 18,
//   sex: null,
// }
```

## Result

| 参数         | 说明                     |
| ------------ | ------------------------ |
| form         | 表单数据                 |
| resetFields  | 重置表单数据为定义的数据 |
| assignFields | 根据初始字段赋值表单数据 |
