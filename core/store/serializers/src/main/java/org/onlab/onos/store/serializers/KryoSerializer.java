package org.onlab.onos.store.serializers;

import org.onlab.util.KryoPool;
import java.nio.ByteBuffer;

/**
 * StoreSerializer implementation using Kryo.
 */
public class KryoSerializer implements StoreSerializer {

    protected KryoPool serializerPool;

    public KryoSerializer() {
        setupKryoPool();
    }

    /**
     * Sets up the common serialzers pool.
     */
    protected void setupKryoPool() {
        serializerPool = KryoPool.newBuilder()
                .register(KryoPoolUtil.API)
                .build()
                .populate(1);
    }

    @Override
    public byte[] encode(final Object obj) {
        return serializerPool.serialize(obj);
    }

    @Override
    public <T> T decode(final byte[] bytes) {
        if (bytes == null) {
            return null;
        }
        return serializerPool.deserialize(bytes);
    }

    @Override
    public void encode(Object obj, ByteBuffer buffer) {
        serializerPool.serialize(obj, buffer);
    }

    @Override
    public <T> T decode(ByteBuffer buffer) {
        return serializerPool.deserialize(buffer);
    }

}