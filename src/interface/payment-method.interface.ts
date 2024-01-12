import type { PaymentMethodEnum } from "@/enum/payment-method.enum";

export interface IPaymentMethod {
    text: string;
    value: PaymentMethodEnum;
    isSelected: boolean;
}