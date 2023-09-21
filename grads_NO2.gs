sdfopen 2021-OMNO2d_ColumnAmountNO2.nc
set lon -70 -64
set lat -18.5 -14
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
#promedio anual
set grads off
d ave(omno2d_003_colu,t=1,t=365)/1e15
cbarn
#Departamentos Bolivia
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
#Chapare
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm2 16
#ciudad Cochabamba
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm2 15
#Quillacollo
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm2 22
#La Paz
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm2 47
c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=1,t=365)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-NO2-TROPOMI.png

c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=1,t=31)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average Jan 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-01-NO2-TROPOMI.png

c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=32,t=59)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average Feb 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-02-NO2-TROPOMI.png

c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=60,t=90)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average Mar 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-03-NO2-TROPOMI.png

c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=91,t=120)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average Apr 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-04-NO2-TROPOMI.png

c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=121,t=151)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average May 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-05-NO2-TROPOMI.png

c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=152,t=181)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average Jun 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-06-NO2-TROPOMI.png

c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=182,t=212)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average Jul 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-07-NO2-TROPOMI.png

c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=213,t=243)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average Aug 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-08-NO2-TROPOMI.png

c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=244,t=273)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average Sep 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-09-NO2-TROPOMI.png

c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=274,t=304)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average Oct 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-10-NO2-TROPOMI.png

c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=305,t=334)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average Nov 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-11-NO2-TROPOMI.png

c
/home/lucho/DataManagement/color.gs 1 4 -kind royalblue->steelblue->aqua->limegreen->yellowgreen->goldenrod->orangered->mediumvioletred->deeppink->darkviolet
set grads off
d ave(omno2d_003_colu,t=335,t=365)/1e15
cbarn
draw shp /home/lucho/Documents/UMSA/Investigacion/BoliviaShape/BOL_adm1
draw title NO2 TROPOMI Average Dec 2021
draw string 9.96301 7.63426 1E15
draw mark 4 3.95914 3.84867 0.15
draw mark 6 3.95914 3.84867 0.15
draw mark 1 6.58025 2.48704 0.15
draw mark 2 6.58025 2.48704 0.15
draw string 6.41885 2.76775 Cochabamba
draw string 3.50477 4.10571 EL Alto Airport
printim 2021-12-NO2-TROPOMI.png

