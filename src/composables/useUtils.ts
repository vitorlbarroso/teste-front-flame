export function useUtils(){
    const isValidCPF = (cpf: string): boolean => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)

    const isValidCardNumber = (cardNumber: string) => /^(4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/.test(cardNumber.replace(/[\s\-]/g, ''))

    const formatMoney = (amount: number): string => new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(amount)
    
    return { isValidCPF, isValidCardNumber, formatMoney }
}