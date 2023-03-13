<script>
    import Saos from "saos";
</script>

    <Saos animation={"scroll-animation 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 795.591 790.505" class="O">
            <g id="one_logo" transform="translate(0.003 0.001)">
                <path id="Path_1282" data-name="Path 1282" d="M678.065,115.722A387.807,387.807,0,0,0,397.793.019a387.806,387.806,0,0,0-280.272,115.7A378.6,378.6,0,0,0,.035,395.251,378.746,378.746,0,0,0,117.521,674.781a387.807,387.807,0,0,0,280.272,115.7,387.807,387.807,0,0,0,280.272-115.7,378.747,378.747,0,0,0,117.485-279.53A378.6,378.6,0,0,0,678.065,115.722Zm-277,630.352c-73.224,0-137.537-31.933-191.3-93.276-55.549-64.016-81.393-176.3-82.136-259.181s23.17-194.868,77.977-258.141c52.727-61.193,116.594-90.9,189.819-90.9S532.953,76.659,586.72,138c55.995,64.016,81.69,176.3,82.581,259.181S646.132,592.2,591.325,655.323a242.249,242.249,0,0,1-190.264,90.75Z" transform="translate(0 0)"/>
            </g>
        </svg>
    </Saos>


<style>

@keyframes -global-scroll-animation {0% {transform: translateY(1.5rem);opacity: 0;}100% {transform: translateX(0);opacity: 1;}}

.O {
    height: 90vh;
    animation: o-rotation 550s linear infinite;
    z-index: 100;
}
@keyframes o-rotation {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(3600deg);}
}

@media screen and (max-width: 480px) {
    /*.O {height: 55vh;}*/
}

</style>