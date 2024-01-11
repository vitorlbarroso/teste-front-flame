export function useFormatMoney(){
	
	const formatMoney = (amount: number): string => new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(amount);


	return { formatMoney }
}