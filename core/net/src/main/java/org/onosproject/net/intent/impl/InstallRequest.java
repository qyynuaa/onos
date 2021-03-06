/*
 * Copyright 2015 Open Networking Laboratory
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
package org.onosproject.net.intent.impl;

import org.onosproject.net.intent.IntentData;

import java.util.Optional;

import static com.google.common.base.Preconditions.checkNotNull;

// TODO pull out the IntentUpdate inner classes
class InstallRequest implements IntentUpdate {

    // TODO: define an interface and use it, instead of IntentManager
    private final IntentManager intentManager;
    private final IntentData pending;
    private final Optional<IntentData> current;

    InstallRequest(IntentManager intentManager, IntentData intentData, Optional<IntentData> current) {
        this.intentManager = checkNotNull(intentManager);
        this.pending = checkNotNull(intentData);
        this.current = checkNotNull(current);
    }

    @Override
    public Optional<IntentUpdate> execute() {
        return Optional.of(new Compiling(intentManager, pending, current.orElse(null)));
    }
}
