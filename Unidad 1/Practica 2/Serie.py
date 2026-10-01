import numpy as np
import matplotlib.pyplot as plt

#Constantes
Amplitud = 1
Frecuencia = 2
Puntos = 1000

#Pedir numero de armonicos
numero_armonicos = int(input("Ingresa el numero maximo de Armonicos:"))

#Crear el Tiempo
tiempo = np.linspace(0,1,Puntos)

#Crear Onda Vacia
onda_final = np.zeros_like(tiempo)

#Sumar los armonicos
for n in range (1, numero_armonicos + 1, 2):
    #Calcular amplitud del armonico
    amplitud_armonico = (4 * Amplitud / ( n * np.pi) )

    #Calcular armonico
    onda_armonico = (amplitud_armonico * np.sin(2*np.pi*n*Frecuencia*tiempo))

    #Sumar a la onda final
    onda_final = onda_armonico

#Crear la grafica

plt.figure (figsize = (10,5))
plt.plot(tiempo,onda_final,linewidth=2,label="Aproximacion de Fourier")

#Configuracion de la grafica

plt.title(f"Onda Cuadrada - Armonicos hasta n = {numero_armonicos}")

plt.xlabel("Tiempo");
plt.ylabel("Amplitud")
plt.grid(True)
plt.legend()

#Mostrar grafica
plt.show()

