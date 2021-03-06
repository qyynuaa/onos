package org.onlab.packet;

/*
 * Copyright 2014 Open Networking Laboratory
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Representation of a MPLS label.
 */
public class MplsLabel {

    private final int mplsLabel;

    // An MPLS Label maximum 20 bits.
    public static final int MAX_MPLS = 0xFFFFF;

    protected MplsLabel(int value) {
        this.mplsLabel = value;
    }

    public static MplsLabel mplsLabel(int value) {

        if (value > MAX_MPLS) {
            throw new IllegalArgumentException("value exceeds allowed maximum MPLS label value (0xFFFFF)");
        }
        return new MplsLabel(value);
    }

    public int toInt() {
        return this.mplsLabel;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }

        if (obj instanceof MplsLabel) {

            MplsLabel other = (MplsLabel) obj;

            if (this.mplsLabel == other.mplsLabel) {
                return true;
            }
        }

        return false;
    }

    @Override
    public int hashCode() {
        return this.mplsLabel;
    }

    @Override
    public String toString() {
        return String.valueOf(this.mplsLabel);
    }
}
