package com.t2009m1.backend.util;

import java.util.Random;

public class NumberHelper {
    public static int generateRandom(int min, int max) {
        Random random = new Random();
        return random.nextInt(max - min) + min;
    }
}
