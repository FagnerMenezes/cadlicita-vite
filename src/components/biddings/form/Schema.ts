import { z } from "zod";

export const createDataBindingSchema = z.object({
  bidding_notice: z.string().nonempty("O campo edital é obrigatório"),
  n_process: z.string().nonempty("O campo edital é obrigatório"),
  date_init: z.coerce.date(),
  date_finish: z.coerce.date(),
  hours_finish: z.string().nonempty("Campo horário disputa obrigatório"),
  object: z.string(),
  status: z.string().nonempty("Campo status obrigatório"),
  type_dispute: z.string().nonempty("Campo tipo disputa obrigatório"),
  modality: z.string().nonempty("Campo portal obrigatório"),
  portal: z.string().nonempty("Campo status obrigatório"),
});

export type CreateDataBinding = z.infer<typeof createDataBindingSchema>;
