import vine from '@vinejs/vine'

const baseValidator = {
  name: vine.string().trim(),
  cpf: vine.string().trim().fixedLength(11).regex(/^\d+$/),
}

export const customerValidator = vine.compile(vine.object(baseValidator))

export const customerValidatorOptional = vine.compile(
  vine.object({
    name: baseValidator.name.optional(),
    cpf: baseValidator.cpf.optional(),
  })
)
