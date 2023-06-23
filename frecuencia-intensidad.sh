#!/bin/bash
#set -o xtrace
#Programa para manejar los datos de precipitación de las estaciones DECADE

#creado el 30-01-2019 por Luis A. Blacutt, modificado en versión funcional 01-02-2019
#Modificado para los datos entregados por SENAMHI 
#Modificado para calcular los índices para varias estaciones 03-Feb-2023
#Modificado para datos DECADE 22-jun-2023


#for arquivo in `ls PRCP-DECADE/*.dat`
# do
ls PRCP-DECADE/*.dat
echo "Con que archivo trabajamos?"
read arquivo

    nome=`basename $arquivo .dat`
 rm tempo.txt Frecuencia${nome}*.txt Intensidad${nome}*.txt anos.txt
 for ano in `seq -w 1960 2010`
  do
  rm anos.txt tempo.txt
  for mes in `seq 1 12`
   do
    rm tempo.txt
    echo ${nome} $ano"  "$mes
    if [ $mes -lt 10 ]
    then
     echo "meses menores a "$mes; cat ${arquivo} | sed 's/-999.9/NaN/g' |grep "$ano      $mes"|awk '{print $5}' >> tempo.txt 
    else
     cat ${arquivo} | sed 's/-999.9/NaN/g' |grep "$ano      $mes"|awk '{print $5}' >> tempo.txt 
     echo "meses mayores a "$mes
    fi
    echo $ano-$mes >> anos.txt
    awk '{if($1>0) np++}END{print np}' tempo.txt >> Frecuencia${nome}${ano}.txt
    awk '{if($1>0) st+=$1}END{print st}' tempo.txt >> Intensidad${nome}${ano}.txt
  done
 paste anos.txt Frecuencia${nome}${ano}.txt > ${nome}Freq${ano}.txt
 paste anos.txt Intensidad${nome}${ano}.txt > ${nome}Inte${ano}.txt
 done
#done
 #export arquivo="CbbaFreq$ano.txt"
 #echo $arquivo

#gnuplot <<EOF
#reset
#arquivo=system("echo $arquivo")
#set term png
#set output "arquivo.png"
#p arquivo using 2 with lines linetype 8 lw 2
#set term x11
#EOF
#Deshacernos del símbolo "/" para la fecha
#rm FrecuenciaCbba.txt
#sed 's/\//-/g' Cbba > Cbba.txt

#for ano in `seq -w 07 14`
#  do
#  echo $ano
#  cat Cbba.txt | awk -v fn=$ano '/-11-fn/ {print $0}' | awk '{if($2>0) np++}END{print np}' >> FrecuenciaCbba.txt
#  cat Cbba.txt | awk -v fn=$ano '/-11-fn/ {print $0}' | awk '{if($2>0) st+=$2}END{print st}' >> IntensidadCbba.txt

#done

#Esta instrucción es capaz de aislar los valores por meses
#for ano in `seq -w 07 14`; do echo $ano; cat Cbba.txt | grep "...11-$ano"|awk '{print $2}' ;done


