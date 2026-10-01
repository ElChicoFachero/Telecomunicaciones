import numpy as np
import matplotlib.pyplot as plt

Amplitud = 1
Frecuencia = 2
Puntos = 1000

#Crear el Eje del Tiempo
tiempo = np.linspace(0,1,Puntos)

#Funcion para calcular Fourier

def calcular_onda(numero_armonicos):
    #Crear onda vacia
    onda_final = np.zeros_like(tiempo)
    #Sumar unicamente armonicos impares
    for n in range (1, numero_armonicos + 1,2):
        # Amplitud del Armonico
        amplitud_armonico = (4*Amplitud) / (n * np.pi)

        #Calcular el armonico
        onda_armonico = (amplitud_armonico * np.sin(2* np.pi * n * Frecuencia * tiempo))

    onda_final += onda_armonico
    return onda_final


#Valores de Armonicos
armonicos = [1, 3, 5, 100]

#Crear 4 Graficas
fig, graficas = plt.subplots(2,2,figsize = (12,8))

#Convertir las graficas en una lista
graficas = graficas.flatten()

#Generar cada grafica
for i, n in enumerate (armonicos):
    #Calcular la onda
    onda = calcular_onda(n)

    #Dibujar grafica
    graficas[i].plot(tiempo,onda,linewidth = 2)

    #Titulo
    graficas[i].set_title =(f"Aroximacion con n = {n}")

    #Etiquetas
    graficas[i].set_xlabel("Tiempo")
    graficas[i].set_ylabel("Amplitud")

    #Cuadricula
    graficas[i].grid(True)

    #Linea del Centro
    graficas[i].axhline(0, linewidth = 1)

#Ajustar espacios
plt.tight_layout()

#Mostrar las graficas
plt.show()