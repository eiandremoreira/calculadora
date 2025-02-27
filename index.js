class calculadora {
    constructor(inteiro = false) {
	if (typeof inteiro !== 'boolean') throw new Error("O valor deve ser do tipo boolean!")
        this.inteiro = Boolean(inteiro);
    }

    /**
     * 
     * @param {number} somar Soma dois números e informa o resultado.
     * @param {number} subtrair Subtrai dois números e informa o resultado.
     * @param {number} multiplicar Multiplica dois números e informa o resultado.
     * @param {number} dividir Divide dois números e informa o resultado.
     * @param {number} elevar Eleva um número e informa o resultado.
     * @param {number} imc Faz a conta de imc.
     * @returns 
     */

    somar(conta1, conta2) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1)||isNaN(conta2)) throw new Error("Insira um valor válido!");
            if (this.inteiro === true) {
                return parseInt((conta1 + conta2))
            } else {
                return parseFloat((conta1 + conta2));
            }
        } catch (e) {
            throw new Error(e);
        }
    } 

    subtrair(conta1, conta2) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1)||isNaN(conta2)) throw new Error("Insira um valor válido!");
            if (this.inteiro === true) {
                return parseInt((conta1 - conta2))
            } else {
                return parseFloat((conta1 - conta2));
            }        
        } catch (e) {
            throw new Error(e);
        }
    } 

    multiplicar(conta1, conta2) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1)||isNaN(conta2)) throw new Error("Insira um valor válido!");
            if (this.inteiro === true) {
                return parseInt((conta1 * conta2))
            } else {
                return parseFloat((conta1 * conta2));
            }
        } catch (e) {
            throw new Error(e);
        }
    } 

    dividir(conta1, conta2, resto) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1)||isNaN(conta2)) throw new Error("Insira um valor válido!");
            if (resto) {
                if (this.inteiro === true) {
                    return parseInt((conta1 / conta2)) + `, ${parseInt((conta1 % conta2 ))}`;
                } else {
                    return parseFloat((conta1 / conta2)) + `, ${parseFloat((conta1 % conta2 ))}`;
                }
            } else {
                return (conta1 / conta2);
            }
        } catch (e) {
            throw new Error(e);
        }
    } 

    elevar(conta1, conta2) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1)||isNaN(conta2)) throw new Error("Insira um valor válido!");
            if (this.inteiro === true) {
                return parseInt(Math.pow(conta1, conta2))
            } else {
                return parseFloat(Math.pow(conta1, conta2));
            }
        } catch (e) {
            throw new Error(e);
        }
    } 

    imc(conta1, conta2) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1)||isNaN(conta2)) throw new Error("Insira um valor válido!");
            if (this.inteiro === true) {
                return parseInt(conta1 / (conta2 * conta2))
            } else {
                return parseFloat(conta1 / (conta2 * conta2));
            } 
        } catch (e) {
            throw new Error(e);
        }
    }
	
	porcentagem(conta1, conta2) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1)||isNaN(conta2)) throw new Error("Insira um valor válido!");
            const maior = (parseFloat(conta1) > parseFloat(conta2) ? conta : conta2);
            const menor = (parseFloat(conta1) < parseFloat(conta2) ? conta1 : conta2);
            if (this.inteiro === true) {
                return parseInt((menor/maior) * 100)
            } else {
                return parseFloat((menor/maior) * 100);
            } 
        } catch (e) {
            throw new Error(e);
        }
    }
	
	}

};

module.exports = calculadora;
