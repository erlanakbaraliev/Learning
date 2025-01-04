package Session2;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Vector;
import java.util.stream.IntStream;

public class SyncList {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(IntStream.range(0,10).boxed().toList());
        List<Integer> al = new ArrayList<>(list);
        List<Integer> li = new LinkedList<>(list);
        List<Integer> ve = new Vector<>(list);
        List<Integer> syncLi = Collections.synchronizedList(new ArrayList<>(list));
        List<Integer> syncColl = Collections.synchronizedList(new ArrayList<>(list));

        List<Collection<Integer>> colls = List.of(al, li, ve, syncLi, syncColl);
        
        for(Collection<Integer> coll: colls) {
            Thread[] ths = new Thread[2];
            ths[0] = new Thread(()->{
                nonSyncIterate(coll, al.size());
            });
            ths[1] = new Thread(()->{
                syncIterate(coll, coll.size());
            });

            for(int i=1; i<ths.length; i++) { ths[i].start(); }
            modifyList(coll);

            for(int i=1; i<ths.length; i++) {
                try {
                    ths[i].join();
                } catch(InterruptedException e) {
                    e.printStackTrace();
                }
            }

            new java.util.Scanner(System.in).nextLine();
        }
    }
    static void nonSyncIterate(Collection<Integer> coll, int n) {
        for(Iterator<Integer> it=coll.iterator(); it.hasNext();) {
            it.next();
            // System.out.println(it.next());
        }
        System.out.println(coll.size());
    }
    static void syncIterate(Collection<Integer> coll, int n) {
        synchronized(coll) {
            nonSyncIterate(coll, n);
        }
    }
    static void modifyList(Collection<Integer> coll) {
        for(int i=0; i<10_000; i++) {
            coll.add(i);
        }
    }
}