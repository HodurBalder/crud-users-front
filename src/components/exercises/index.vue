<template>
    <div class="wrapper-exercises">
        <div class="palindromo">
            <el-input placeholder="Please input text" v-model="textPalindromo" class="input-with-select">
                <el-button slot="append"  @click="palindromo()"> es palindromo?</el-button>
            </el-input>
        </div>
        <div class="burbuja">
            <el-input placeholder='Please input numbers split ","' v-model="textBurbuja" class="input-with-select burbuja">
                <el-button slot="append"  @click="burbuja()"> ordenar</el-button>
            </el-input>
        </div>
    </div>

</template>

<script>
export default {
    name: 'ExercisesTest',
    data() {
        return {
            textPalindromo: '',
            textBurbuja: '',
        }
    },
    methods: {
        palindromo(){
            const textClean = this.textPalindromo.split(' ').join('')
            // const textCleanReverse  = this.textPalindromo.split('').reverse().join('').split(' ').join('')
            // const isPalindromo = textClean === textCleanReverse
            // console.log(isPalindromo)
            // hasta aqui solo usando funciones de Js ya esta la solucion 
            let i = 0
            let isPalindromo = false
            const middle = Math.trunc(textClean.length / 2)
            
            do{
                isPalindromo = textClean[i] === textClean[textClean.length-i-1]
                i ++
            }while(i<middle && isPalindromo)
            const message =  `El texto ingresado: ${this.textPalindromo} ` + (isPalindromo ? 'es un palindromo ' : 'no es palindromo ')
            const type = isPalindromo ? 'success' : 'error'
            this.$message({message, type}) 
        },

        burbuja(){
            const arrayNum = this.textBurbuja.split(',')
            let i, k, aux;
            const length = arrayNum.length;
            for (k = 1; k < length; k++) {
                for (i = 0; i < (length - k); i++) {
                    if (arrayNum[i] > arrayNum[i + 1]) {
                        aux = arrayNum[i];
                        arrayNum[i] = arrayNum[i + 1];
                        arrayNum[i + 1] = aux;
                    }
                }
            }
            this.$message({message: `Felicidades!!! Quedo ordenado: ${arrayNum} `, type: 'success'})
        }
    }
}
</script>

<style>

.wrapper-exercises {
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-gap: 10px;
margin: 50px;
}
.palindromo{
  grid-column: 1;
  grid-row: 1;
  width: 90%;
}
.burbuja{
  grid-column: 2;
  grid-row: 1;
  width: 90%
} 
</style>