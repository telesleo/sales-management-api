import vine from '@vinejs/vine'

const baseValidator = {
  name: vine.string().trim(),
  price: vine.number().positive().withoutDecimals(),
  description: vine.string().trim(),
}

export const productValidator = vine.compile(vine.object(baseValidator))

export const productValidatorOptional = vine.compile(
  vine.object({
    name: baseValidator.name.optional(),
    price: baseValidator.price.optional(),
    description: baseValidator.description.optional(),
  })
)
