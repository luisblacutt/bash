#!/bin/bash
#Programa para estudiar la precipitación por pentadas
#Generado por Luis A. Blacutt - LFA 13-Feb-2020

rm pentada*TROMPILLO.txt
for ano in {1961..2010}
do
 awk -v fn=$ano '{if ($2 == fn) print $0}' /media/lucho/Datos/BoliviaDATA/D01/TROMPILLO_\(AAS\).dat >tempo.txt
#/media/lucho/Datos/BoliviaDATA/D01/AASANA.dat 

 i=1
 for numeritos in {1..73}
  do
  j=$((i+4))
# echo "$i-$j"
  i=$((i+5))
  cat tempo.txt | sed -n "${i},${j}p" | awk '{if ($5!=-999.900) sum+=$5}END{print sum/5}' >> pentada${ano}TROMPILLO.txt
 done
 echo $ano
done


#Para calcular los promedios de una determinada región
cat pentada????TROMPILLO.txt > borra.txt
 for fn in `seq 1 73`; do echo $fn; awk -v clase=$fn '(NR%73==clase) {sum+=$1} {avg=sum*5/50;print avg}' borra.txt |tail -1 >> apaga.txt; done

#awk ' NR==1 && NR<= 6{sum +=$5} END {print sum/5}' tempo.txt 

#for fn in `seq 0 72`; do echo "pentada $fn"; awk -v clase=$fn '!/-999.900/ (NR%5==clase) {sum+=$5} {avg=sum/5;print avg}' tempo.txt |tail -1 >> pentadasAASANA.txt; done

#cat tempo.txt | sed -n '1,5p' | awk '{if ($5!=-999.900) sum+=$5}END{print sum/5}'
