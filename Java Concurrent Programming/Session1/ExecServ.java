package Session1;

import java.util.Random;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ExecServ {
    private static int totalClientLoans = 0;
    public static void main(String[] args) {
        ExecutorService ex = Executors.newFixedThreadPool(10);
        for(int i=0; i<10; i++) {
            ex.submit(new Client(i+1));
        }
        ex.shutdown();
        try {
            ex.awaitTermination(1, TimeUnit.MINUTES);
        } catch(InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Total given loan by the bank: "+Bank.getTotalGivenLoan());
    }
}
class Client implements Runnable {
    private int id;
    private int totalLoanAmount = 0;
    private int loanAmount;
    private Random random;
    public Client(int id) {
        this.id = id;
        random = new Random();
    }
    @Override
    public void run() {
        for(int i=0; i<100_000; i++) {
            loanAmount = random.nextInt(10);
            Bank.getLoan(loanAmount, this);
            totalLoanAmount+=loanAmount;
            
            // System.out.println("Client"+id+" took "+loanAmount+" loan");
        }
    }
    void addLoan(int loanAmount) {
        this.totalLoanAmount += loanAmount;
    }
    void printTotalLoan() {
        System.out.println(totalLoanAmount);
    }
}
class Bank {
    private static int budget = 10_000000;
    private static int totalGivenLoan = 0;
    private Bank() {
    }
    public synchronized static boolean getLoan(int loanAmount, Client client) {
        if((budget-loanAmount) >= 0) {
            budget -= loanAmount;
            totalGivenLoan += loanAmount;
            client.addLoan(loanAmount);
            return true;
        }
        return false;
    }
    public static int getTotalGivenLoan() {return totalGivenLoan;}
}