<script lang="ts">
    import {T} from '@threlte/core'

    export let finalPos;
</script>

<T.Mesh
	position.x={$finalPos.x} position.y={$finalPos.y} position.z={$finalPos.z}
>
	<T.SphereGeometry args={[0.75, 100, 100]} />
	<T.MeshStandardMaterial color="red" />
</T.Mesh>
