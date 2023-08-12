import * as yup from 'yup';

export const usageValidationSchema = yup.object().shape({
  usage_date: yup.date().required(),
  usage_count: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
});
