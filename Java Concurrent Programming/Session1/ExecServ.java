package Session1;

import java.util.Arrays;
import java.util.Random;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.Future;
import java.util.List;
import java.util.ArrayList;

public class ExecServ {
    public static void main(String[] args) {
        final int NUM_CLIENTS = 10;
        int[] clientLoan = new int[NUM_CLIENTS];
        int[] totalGivenLoanByBank = new int[1];
        List<Future<Integer>> futures = new ArrayList<>();

        ExecutorService ex = Executors.newFixedThreadPool(10);
        
        for(int i=0; i<NUM_CLIENTS; i++) {
            int finali = i;
            futures.add(ex.submit(()->{
                for(int j=0; j<10_000; j++) {
                    int loan = ThreadLocalRandom.current().nextInt(100, 1000);
                    clientLoan[finali] += loan;
                }
                return clientLoan[finali];
            }));

        }
        ex.shutdown();
        try {
            ex.awaitTermination(1, TimeUnit.MINUTES);
        } catch(InterruptedException e) {
            e.printStackTrace();
        }

        for(int i=0; i<futures.size(); i++) {
            try {
                totalGivenLoanByBank[0] += futures.get(i).get();
            } catch(InterruptedException | ExecutionException e) {
                e.printStackTrace();
            }
        }

        System.out.println("Client loan sum: " + Arrays.stream(clientLoan).sum() + " total loan given by bank: " + totalGivenLoanByBank[0]);
    }
}