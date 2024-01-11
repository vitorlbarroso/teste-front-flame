import type { State } from '@/interface/state.interface';

export const state: State = {
    productsSelecteds: 0,
    products: [
        { id: 1, name: 'Teclado Machenike K500', description: 'O melhor teclado que alguém pode querer.' , price: 650, isSelected: false },
		{ id: 2, name: 'Mic A16T Fifine', description: 'Microfone condensador com luz RGB.' , price: 380, isSelected: false },
		{ id: 3, name: 'Mouse MX Master 3S', description: 'Mouse ergonomico da loggi.' , price: 598, isSelected: false },
		{ id: 5, name: 'iPhone 15 Pro Max', description: 'Quase um tablet' , price: 9000, isSelected: false },
		{ id: 4, name: 'Camisa do Flamengo', description: 'Camisa oficial Clube de Regatas do Flamengo.' , price: 5000, isSelected: false },
    ],
    steps: [
        { key:1, number: 1 },
        { key:2, number: 2 },
        { key:3, number: 3 }
    ]
};