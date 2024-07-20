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

export const optionalAddressValidator = vine.compile(
  vine.object({
    country: validatorBase.country.optional(),
    state: validatorBase.state.optional(),
    city: validatorBase.city.optional(),
    street: validatorBase.street.optional(),
    number: validatorBase.number.optional(),
  })
)
