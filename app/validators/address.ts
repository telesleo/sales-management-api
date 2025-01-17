import vine from '@vinejs/vine'

const validatorBase = {
  customerId: vine.number(),
  country: vine.string().trim(),
  state: vine.string().trim(),
  city: vine.string().trim(),
  street: vine.string().trim(),
  number: vine.number().positive(),
}

export const addressValidator = vine.compile(vine.object(validatorBase))

export const addressValidatorOptional = vine.compile(
  vine.object({
    customerId: validatorBase.customerId.optional(),
    country: validatorBase.country.optional(),
    state: validatorBase.state.optional(),
    city: validatorBase.city.optional(),
    street: validatorBase.street.optional(),
    number: validatorBase.number.optional(),
  })
)
