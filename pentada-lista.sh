#!/bin/bash
#Programa para estudiar la precipitación por pentadas
#Generado por Luis A. Blacutt - LFA 13-Feb-2020
#Modificado el 26-Ene-2023

rm listap.txt
for arquivo in `ls /media/lucho/Datos/BoliviaDATA/D01/[[:upper:]]*.dat`
 do
 dos2unix $arquivo
 porc=$(cat $arquivo |awk '{print $3}'|sed -n '7p'|bc)
 echo $porc
 nome=$(echo $arquivo |cut -c 36-65)
 if [[ $porc > 70 ]]
# if [[ $porc -gt "70" ]]
  then
   rm pentada*${nome}.txt
   for ano in {1961..2010}
    do
     awk -v fn=$ano '{if ($2 == fn) print $0}' $arquivo >tempo.txt
     i=1
     for numeritos in {1..73}
      do
      j=$((i+4))
# echo "$i-$j"
      i=$((i+5))
      cat tempo.txt | sed -n "${i},${j}p" | awk '{if ($5!=-999.900) sum+=$5}END{print sum}' >> pentada${ano}${nome}.txt
    done
    echo $ano
   done
 cat pentada????${nome}.txt > borra.txt
 rm apaga.txt
 for fn in `seq 1 73`; do echo $fn; awk -v clase=$fn '(NR%73==clase) {sum+=$1} {avg=sum/50;print avg}' borra.txt |tail -1 >> res${nome}.txt; done

#  echo $arquivo >> listap.txt
  else echo "nones"
 fi
done
rename 's/dat//g' res*
rename 's/\.+/./g' res*

#Para calcular los promedios de una determinada región

#awk ' NR==1 && NR<= 6{sum +=$5} END {print sum/5}' tempo.txt 

#for fn in `seq 0 72`; do echo "pentada $fn"; awk -v clase=$fn '!/-999.900/ (NR%5==clase) {sum+=$5} {avg=sum/5;print avg}' tempo.txt |tail -1 >> pentadasAASANA.txt; done

#cat tempo.txt | sed -n '1,5p' | awk '{if ($5!=-999.900) sum+=$5}END{print sum/5}' 
