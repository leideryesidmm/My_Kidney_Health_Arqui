<h1 align=center> Proyecto Final Arquitectura "Módulo Médico" Solución Tecnológica para Diálisis Peritoneal</h1>

Este proyecto se basa en el desarrollo de una aplicación web que funciona como módulo para el médico tratante de personas con enfermedad renal crónica en tratamiento de Diálisis Peritoneal. 

Este módulo le permite al médico ver todos los pacientes que esta atendiendo, añadir nuevos pacientes, ver la información personal y clínica, editar dicha información y deshabilitar un paciente cuandos sea necesario.
También le permite ver, agregar y editar las prescripciones (que vienen siendo los recambios de líquido que se realiza el paciente a diario).
Y por último, realizar el seguimiento de las citas a las que ha asistido el paciente con los distintos especialistas y la información de examenes que se haya realizado el paciente durante el mes.

## Instalación
### Prerequisitos
- Tener instalado Java y Maven en el ordenador

  A continuación los enlaces para descargar tanto Java como Maven si aún no los tienes.

    [Descargar Java para Windows](https://www.java.com/es/download/ie_manual.jsp)
    [Descargar Java para linux](https://www.java.com/es/download/linux_manual.jsp)

  Después de tener tener descargado Java debes instalarlo o activarlo, en los enlaces anteriores estan las instrucciones para hacerlo.

   [Descargar Maven](https://maven.apache.org/download.cgi)

  Después de descargar maven debes seguir una serie de pasos dependiendo de tu sistema operativo para la instalación en el enlace anterior podrás encontrar un instructivo para ello.

### Paso a paso

- Cuando tengas los prerequisitos listos comenzaremos a clonar los repositorios de la parte backend (API rest) y frontend.

#### Backend

   Comienza clonando el repositorio: [Repositorio Api rest](https://github.com/leideryesidmm/APIAppDialisis).
    
    Para ello abre la terminal y através del comando:
    "git clone https://github.com/leideryesidmm/APIAppDialisis" podrás tener la API en tu dispositivo.
    
    o descargue el archivo zip del repositorio y descomprime.
    
    Puedes abrirlo en cualquier IDE de desarrollo aunque te recomendamos IntelliJ Idea por su facilidad de uso con Spring boot.
    En el IDE IntelliJ Idea en el costado derecho te saldrá un apartado maven al darle clic debes darle clic al proyecto,
    plugins, spring-boot y spring-boot:run.

    
<p align="center">
  <img src="https://github.com/leideryesidmm/My_Kidney_Health_Arqui/assets/84026784/ab20b79e-997e-44e6-9053-7084ffd04ddc" alt="Texto alternativo">
</p>

#### Frontend 

  Clone el repositorio de la parte frontend a través del comando:
  
   "git clone https://github.com/leideryesidmm/My_Kidney_Health_Arqui" podrás tener la parte frontend del módulo del médico.
   
  O descargue el archivo zip del repositorio y descomprime.

  Puedes abrirlo en cualquier IDE de desarrollo y correrlo de manera local, este utilizará el puerto 8080 para su funcionamiento
  
#### Base de datos

## Arquitectura del proyecto

La arquitectura en el desarrollo del proyecto es una Arquitectura Distribuida, consumiendo de manera independiente el backend (API REST) en Java Spring Boot, el frontend con HTML, CSS y JavaScript y la base de datos en MySQL.
<img src="arquitectura.jpg">
![arquitectura](https://github.com/leideryesidmm/My_Kidney_Health_Arqui/assets/114199483/bad16717-af8a-438f-8688-1dc0381ca42a)

## Documentación
La documentación de la aplicación se podrá ver en: [Documentación](https://docs.google.com/document/d/12OjZ_5jefQwNuvoaR-wIvdxSORHmp71-kIL4fjTayBk/edit)

## Autores:
1. Luis Fernando López Pacheco 1151519 - luisfernandolp@ufps.edu.co
2. Angely Natalia García Barrera 1151775 - angelynataliagb@ufps.edu.co
3. Jheyner Alexander Lobo Duarte 1151785 - jheyneralexanderld@ufps.edu.co
4. Leider Yesid Martínez Mandón 1151786 - leideryesidmm@ufps.edu.co
5. Matilde Alexandra Arévalo León 1151788 - matildealexandraal@ufps.edu.co
___
## Institución Académica:
[Programa de Ingeniería de Sistemas](https://ingsistemas.cloud.ufps.edu.co/ "Programa de Ingeniería de Sistemas") de la [Universidad Francisco de Paula Santander](https://ww2.ufps.edu.co/ "Universidad Francisco de Paula Santander")
