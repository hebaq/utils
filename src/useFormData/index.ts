import { reactive } from 'vue';

/**
 * 表单数据 hook
 * @param initValue 默认值
 */
export const useFormData = function <T extends object>(initValue?: T) {
  const form = reactive<T>({ ...initValue } as T);

  const resetFields = () => {
    Object.keys(form).forEach(key => {
      if (isValidKey(key, form)) {
        form[key] = initValue ? initValue[key] : (void 0 as never);
      }
    });
  };

  const assignFields = (data: object) => {
    Object.keys(form).forEach(key => {
      if (isValidKey(key, form)) {
        form[key] = data[key];
      }
    });
  };

  return {
    /** form表单数据 */
    form,
    /** 重置为初始值 */
    resetFields,
    /** 赋值不改变字段 */
    assignFields
  };
}

function isValidKey(key: string | number | symbol, object: object): key is keyof typeof object {
  return key in object;
}
