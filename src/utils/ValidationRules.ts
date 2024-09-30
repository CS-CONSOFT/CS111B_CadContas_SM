export const validationRules = {
    required: (v: string | null) => (!!v && v !== null) || 'Este campo é obrigatório',
    numeric: (v: string) => /^[0-9]+$/.test(v) || 'O valor deve ser numérico',
    minLength: (min: number) => (v: string) => v.length >= min || `O valor deve ter no mínimo ${min} caracteres`,
    maxLength: (max: number) => (v: string) => v.length <= max || `O valor deve ter no máximo ${max} caracteres`,
    email: (v: string) => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido',
    celular: (v: string) => /^(\(?\d{2}\)?\s?)?(\d{4,5}\-\d{4})$/.test(v) || 'O número de celular deve ser válido (ex: (91) 91234-5678)',
    cep: (v: string) => /^[0-9]{5}-[0-9]{3}$/.test(v) || 'O CEP deve ser válido (ex: 12345-678)'
};
