#!/bin/bash
#Programa para estudiar la precipitación por pentadas
#Generado por Luis A. Blacutt - LFA 13-Feb-2020

rm pentada*AASANA.txt
for ano in {1961..2010}
do
 awk -v fn=$ano '{if ($2 == fn) print $0}' /media/lucho/Datos/BoliviaDATA/D01/AASANA.dat >tempo.txt

 i=1
 for numeritos in {1..73}
  do
  j=$((i+4))
# echo "$i-$j"
  i=$((i+5))
  cat tempo.txt | sed -n "${i},${j}p" | awk '{if ($5!=-999.900) sum+=$5}END{print sum/5}' >> pentada${ano}AASANA.txt
 done
 echo $ano
done




#awk ' NR==1 && NR<= 6{sum +=$5} END {print sum/5}' tempo.txt 

#for fn in `seq 0 72`; do echo "pentada $fn"; awk -v clase=$fn '!/-999.900/ (NR%5==clase) {sum+=$5} {avg=sum/5;print avg}' tempo.txt |tail -1 >> pentadasAASANA.txt; done

#cat tempo.txt | sed -n '1,5p' | awk '{if ($5!=-999.900) sum+=$5}END{print sum/5}'
