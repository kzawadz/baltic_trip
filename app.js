const colors = ["#167f8c", "#2f6f53", "#bd5c3d", "#2766ad", "#7f5b9e", "#c27a2c"];

const segments = [
  {
    date: "08.06 pon.",
    title: "Swinoujscie - Rewal",
    distance: 60,
    character: "sredni start",
    priority: "Miedzyzdroje + klify",
    stops: ["Stawa Mlyny", "Wolinski Park Narodowy", "Klify w Miedzyzdrojach", "Gosan"],
    waypoints: [
      { name: "Swinoujscie", lat: 53.9105, lng: 14.2471 },
      { name: "Miedzyzdroje", lat: 53.9297, lng: 14.4506 },
      { name: "Gosan", lat: 53.9437, lng: 14.5102 },
      { name: "Dziwnow", lat: 54.0258, lng: 14.7669 },
      { name: "Rewal", lat: 54.0812, lng: 15.0147 },
    ],
  },
  {
    date: "09.06 wt.",
    title: "Rewal - Kolobrzeg - Mielno",
    distance: 82,
    character: "pelny etap",
    priority: "Trzesacz + Kolobrzeg",
    stops: ["Ruiny kosciola w Trzesaczu", "Latarnia w Niechorzu", "Port w Kolobrzegu", "Jezioro Jamno"],
    waypoints: [
      { name: "Rewal", lat: 54.0812, lng: 15.0147 },
      { name: "Trzesacz", lat: 54.0778, lng: 14.9918 },
      { name: "Niechorze", lat: 54.0961, lng: 15.0807 },
      { name: "Kolobrzeg", lat: 54.1759, lng: 15.5833 },
      { name: "Mielno", lat: 54.2609, lng: 16.0622 },
    ],
  },
  {
    date: "10.06 sr.",
    title: "Mielno - Darlowo - Jaroslawiec",
    distance: 82,
    character: "pelny etap",
    priority: "Darlowko + port",
    stops: ["Promenada w Mielnie", "Sarbinowo i Chlopy", "Zamek w Darlowie", "Port w Darlowku"],
    waypoints: [
      { name: "Mielno", lat: 54.2609, lng: 16.0622 },
      { name: "Sarbinowo", lat: 54.2475, lng: 15.957 },
      { name: "Darlowo", lat: 54.421, lng: 16.4107 },
      { name: "Darlowko", lat: 54.4417, lng: 16.3797 },
      { name: "Jaroslawiec", lat: 54.5417, lng: 16.5422 },
    ],
  },
  {
    date: "11.06 czw.",
    title: "Jaroslawiec - Ustka - Smoldzino",
    distance: 78,
    character: "terenowo-logistyczny",
    priority: "Ustka + Rowy",
    stops: ["Latarnia w Jaroslawcu", "Port i promenada w Ustce", "Bunkry Bluchera", "Rowy"],
    waypoints: [
      { name: "Jaroslawiec", lat: 54.5417, lng: 16.5422 },
      { name: "Ustka", lat: 54.5805, lng: 16.8619 },
      { name: "Rowy", lat: 54.6652, lng: 17.0547 },
      { name: "Kluki", lat: 54.6649, lng: 17.3355 },
      { name: "Smoldzino", lat: 54.6636, lng: 17.2136 },
    ],
  },
  {
    date: "12.06 pt.",
    title: "Smoldzino - Leba - Karwia",
    distance: 92,
    character: "kluczowy dzien",
    priority: "wydmy + Leba",
    stops: ["Skansen Slowincow w Klukach", "Jezioro Lebsko", "Ruchome wydmy", "Latarnia Stilo", "Debki"],
    waypoints: [
      { name: "Smoldzino", lat: 54.6636, lng: 17.2136 },
      { name: "Kluki", lat: 54.6649, lng: 17.3355 },
      { name: "Ruchome wydmy", lat: 54.7561, lng: 17.4554 },
      { name: "Leba", lat: 54.7607, lng: 17.5564 },
      { name: "Stilo", lat: 54.7868, lng: 17.7361 },
      { name: "Debki", lat: 54.8319, lng: 18.0867 },
      { name: "Karwia", lat: 54.8306, lng: 18.2108 },
    ],
  },
  {
    date: "13.06 sob.",
    title: "Karwia - Wladyslawowo - Hel",
    distance: 70,
    character: "finisz + transfer",
    priority: "Rozewie + Hel",
    stops: ["Gwiazda Polnocy", "Latarnia Rozewie", "Sciezka przez Polwysep Helski", "Jurata", "Fokarium i cypel Helu"],
    waypoints: [
      { name: "Karwia", lat: 54.8306, lng: 18.2108 },
      { name: "Jastrzebia Gora", lat: 54.8314, lng: 18.3136 },
      { name: "Rozewie", lat: 54.8292, lng: 18.3361 },
      { name: "Wladyslawowo", lat: 54.7909, lng: 18.4009 },
      { name: "Chalupy", lat: 54.7604, lng: 18.5109 },
      { name: "Jastarnia", lat: 54.6961, lng: 18.6787 },
      { name: "Jurata", lat: 54.6763, lng: 18.7187 },
      { name: "Hel", lat: 54.608, lng: 18.8013 },
    ],
  },
].map((segment, index) => ({ ...segment, color: colors[index] }));

const routePoints = segments.flatMap((segment, index) =>
  index === 0 ? segment.waypoints : segment.waypoints.slice(1),
);

const normalRideSpeedKmh = 17;

const trainStations = [
  { name: "Swinoujscie", lat: 53.9106, lng: 14.2474, note: "start trasy" },
  { name: "Miedzyzdroje", lat: 53.9294, lng: 14.4508, note: "blisko WPN i klifow" },
  { name: "Kamien Pomorski", lat: 53.9689, lng: 14.7736, note: "awaryjnie dla okolic Dziwnowa" },
  { name: "Trzebiatow", lat: 54.0611, lng: 15.2684, note: "awaryjnie dla odcinka Rewal - Kolobrzeg" },
  { name: "Kolobrzeg", lat: 54.1803, lng: 15.5688, note: "duzy wezel po 2. etapie" },
  { name: "Mielno Koszalinskie", lat: 54.2532, lng: 16.0546, note: "stacja sezonowa przy Mielnie" },
  { name: "Koszalin", lat: 54.1906, lng: 16.1817, note: "wiekszy wezel przy trasie" },
  { name: "Darlowo", lat: 54.4209, lng: 16.4098, note: "dojazd do Darlowka" },
  { name: "Slawno", lat: 54.3619, lng: 16.6787, note: "awaryjny wezel przed Ustka" },
  { name: "Ustka", lat: 54.5805, lng: 16.8619, note: "wygodny punkt przerwania etapu" },
  { name: "Slupsk", lat: 54.4642, lng: 17.0287, note: "duzy wezel poza linia wybrzeza" },
  { name: "Leba", lat: 54.7589, lng: 17.5575, note: "przy Slowinskim Parku Narodowym" },
  { name: "Wladyslawowo", lat: 54.7917, lng: 18.4013, note: "poczatek polwyspu" },
  { name: "Chalupy", lat: 54.7604, lng: 18.5109, note: "awaryjnie na polwyspie" },
  { name: "Jastarnia", lat: 54.6965, lng: 18.6788, note: "srodek polwyspu" },
  { name: "Jurata", lat: 54.6764, lng: 18.7187, note: "blisko koncowki" },
  { name: "Hel", lat: 54.6081, lng: 18.8014, note: "koniec trasy" },
];

let map;
let bounds;
let activeSegment = 0;
let segmentPolylines = [];
let overviewPolyline;
let attractionMarkers = [];
let trainStationMarkers = [];
let routePath = [];
let segmentRoutePaths = segments.map((segment) => segment.waypoints);
let isFullRouteSelected = false;
let elevationRequestId = 0;
let AdvancedMarkerElement;
let PinElement;
let ElevationService;
let Route;

function initStaticUi() {
  const totalDistance = segments.reduce((sum, segment) => sum + segment.distance, 0);
  const maxDistance = Math.max(...segments.map((segment) => segment.distance));
  document.getElementById("totalDistance").textContent = `~${totalDistance} km`;

  const segmentList = document.getElementById("segmentList");
  segmentList.innerHTML = segments
    .map(
      (segment, index) => `
        <button class="segment-button" type="button" data-index="${index}" style="--segment-color: ${segment.color}">
          <span class="segment-top">
            <span class="segment-date">${segment.date}</span>
            <span class="segment-distance">~${segment.distance} km</span>
          </span>
          <span class="segment-route">${segment.title}</span>
          <span class="segment-priority">${segment.priority} · ${segment.character}</span>
        </button>
      `,
    )
    .join("");

  segmentList.querySelectorAll(".segment-button").forEach((button) => {
    button.addEventListener("click", () => focusSegment(Number(button.dataset.index)));
  });

  document.getElementById("distanceBars").innerHTML = segments
    .map(
      (segment) => `
        <div class="bar-row" style="--segment-color: ${segment.color}; --bar-width: ${(segment.distance / maxDistance) * 100}%">
          <span>${segment.date.split(" ")[0]}</span>
          <span class="bar-track"><span class="bar-fill"></span></span>
          <span>${segment.distance} km / ${formatRideTime(segment.distance)}</span>
        </div>
      `,
    )
    .join("");

  document.getElementById("attractions").innerHTML = segments
    .map(
      (segment) => `
        <article class="attraction-card" style="--segment-color: ${segment.color}">
          <strong>${segment.date}</strong>
          <h3>${segment.priority}</h3>
          <ul>${segment.stops.map((stop) => `<li>${stop}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");

  document.getElementById("showAll").addEventListener("click", showFullRoute);
  document.getElementById("toggleStations").addEventListener("change", (event) => {
    setTrainStationsVisible(event.target.checked);
  });
  drawEmptyElevation();
}

function formatRideTime(distanceKm) {
  const totalMinutes = Math.round((distanceKm / normalRideSpeedKmh) * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours} h ${String(minutes).padStart(2, "0")} min`;
}

window.initTripMap = async function initTripMap() {
  if (!window.google?.maps) {
    showMapNotice();
    return;
  }

  await loadGoogleLibraries();

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 54.45, lng: 16.5 },
    zoom: 8,
    mapId: "DEMO_MAP_ID",
    mapTypeControl: false,
    fullscreenControl: true,
    streetViewControl: false,
  });

  bounds = new google.maps.LatLngBounds();
  routePoints.forEach((point) => bounds.extend(point));
  map.fitBounds(bounds);

  drawApproxRoute();
  addAttractionMarkers();
  addTrainStationMarkers();
  requestRoutes();
  focusSegment(0);
};

async function loadGoogleLibraries() {
  const [{ AdvancedMarkerElement: MarkerElement, PinElement: Pin }, { ElevationService: Elevation }] =
    await Promise.all([
      google.maps.importLibrary("marker"),
      google.maps.importLibrary("elevation"),
      google.maps.importLibrary("maps"),
    ]);

  AdvancedMarkerElement = MarkerElement;
  PinElement = Pin;
  ElevationService = Elevation;

  try {
    ({ Route } = await google.maps.importLibrary("routes"));
  } catch (error) {
    console.warn("Routes library is unavailable. Using approximate waypoint polylines.", error);
  }
}

function drawApproxRoute() {
  overviewPolyline = new google.maps.Polyline({
    path: routePoints,
    geodesic: true,
    strokeColor: "#1f2a2e",
    strokeOpacity: 0.22,
    strokeWeight: 8,
    map,
  });

  segmentPolylines = segments.map(
    (segment) =>
      new google.maps.Polyline({
        path: segment.waypoints,
        geodesic: true,
        strokeColor: segment.color,
        strokeOpacity: 0.86,
        strokeWeight: 5,
        map,
      }),
  );
}

function requestRoutes() {
  if (!Route) {
    routePath = routePoints;
    segmentRoutePaths = segments.map((segment) => segment.waypoints);
    updateElevationForCurrentSelection();
    return;
  }

  Promise.all(segments.map((segment) => getSegmentRoute(segment))).then((paths) => {
      const resolvedPaths = paths.map((path, index) =>
        path.length ? path : segments[index].waypoints,
      );
      segmentRoutePaths = resolvedPaths;
      routePath = resolvedPaths.flat();

      if (!paths.some((path) => path.length)) {
        routePath = routePoints;
        updateElevationForCurrentSelection();
        return;
      }

      segmentPolylines.forEach((polyline) => polyline.setMap(null));
      overviewPolyline.setMap(null);
      overviewPolyline = new google.maps.Polyline({
        path: routePath,
        strokeColor: "#1f2a2e",
        strokeOpacity: 0.16,
        strokeWeight: 10,
        map,
      });
      segmentPolylines = resolvedPaths.map((path, index) => {
        const segment = segments[index];
        return new google.maps.Polyline({
          path,
          strokeColor: segment.color,
          strokeOpacity: 0.9,
          strokeWeight: 5,
          map,
        });
      });
      if (isFullRouteSelected) {
        showFullRoute();
      } else {
        focusSegment(activeSegment);
      }
    });
}

async function getSegmentRoute(segment) {
  const origin = segment.waypoints[0];
  const destination = segment.waypoints[segment.waypoints.length - 1];
  const waypoints = segment.waypoints.slice(1, -1).map((point) => ({
    location: { lat: point.lat, lng: point.lng },
  }));

  try {
    const { routes } = await Route.computeRoutes({
      origin: { lat: origin.lat, lng: origin.lng },
      destination: { lat: destination.lat, lng: destination.lng },
      intermediates: waypoints,
      travelMode: "BICYCLING",
      fields: ["path"],
      language: "pl",
      region: "PL",
    });

    return routes?.[0]?.path?.map(normalizePoint) ?? [];
  } catch (error) {
    console.warn(`Route.computeRoutes failed for ${segment.title}.`, error);
    return [];
  }
}

function addAttractionMarkers() {
  attractionMarkers = segments.flatMap((segment) =>
    segment.waypoints.map((point) => {
      const pin = new PinElement({
        background: segment.color,
        borderColor: "#ffffff",
        glyphColor: "#ffffff",
        scale: 0.78,
      });
      const marker = new AdvancedMarkerElement({
        position: point,
        map,
        title: point.name,
        content: pin,
        gmpClickable: true,
      });
      const info = new google.maps.InfoWindow({
        content: `<strong>${point.name}</strong><br><span>${segment.date} · ${segment.title}</span>`,
      });
      marker.addEventListener("gmp-click", () => info.open({ anchor: marker, map }));
      return marker;
    }),
  );
}

function addTrainStationMarkers() {
  trainStationMarkers = trainStations.map((station) => {
    const pin = new PinElement({
      background: "#2766ad",
      borderColor: "#ffffff",
      glyph: "PKP",
      glyphColor: "#ffffff",
      scale: 0.74,
    });
    const marker = new AdvancedMarkerElement({
      position: { lat: station.lat, lng: station.lng },
      title: `PKP ${station.name}`,
      content: pin,
      gmpClickable: true,
    });
    const info = new google.maps.InfoWindow({
      content: `<strong>PKP ${station.name}</strong><br><span>${station.note}</span>`,
    });
    marker.addEventListener("gmp-click", () => info.open({ anchor: marker, map }));
    return marker;
  });
  setTrainStationsVisible(document.getElementById("toggleStations").checked);
}

function setTrainStationsVisible(isVisible) {
  trainStationMarkers.forEach((marker) => {
    marker.map = isVisible ? map : null;
  });
}

function focusSegment(index) {
  activeSegment = index;
  isFullRouteSelected = false;
  document.querySelectorAll(".segment-button").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.index) === index);
  });

  if (!map || !segmentPolylines[index]) return;

  segmentPolylines.forEach((polyline, polylineIndex) => {
    polyline.setOptions({
      strokeOpacity: polylineIndex === index ? 1 : 0.22,
      strokeWeight: polylineIndex === index ? 7 : 4,
    });
  });

  const segmentBounds = new google.maps.LatLngBounds();
  const path = segmentPolylines[index].getPath();
  if (path.getLength()) {
    path.forEach((point) => segmentBounds.extend(point));
  } else {
    segments[index].waypoints.forEach((point) => segmentBounds.extend(point));
  }
  map.fitBounds(segmentBounds, 64);
  updateElevationForCurrentSelection();
}

function showFullRoute() {
  isFullRouteSelected = true;
  document.querySelectorAll(".segment-button").forEach((button) => button.classList.remove("is-active"));
  if (!map) return;
  segmentPolylines.forEach((polyline) => {
    polyline.setOptions({ strokeOpacity: 0.9, strokeWeight: 5 });
  });
  map.fitBounds(bounds, 44);
  updateElevationForCurrentSelection();
}

function updateElevationForCurrentSelection() {
  if (isFullRouteSelected) {
    updateElevationTitle("cala trasa");
    requestElevation(routePath.length ? routePath : routePoints, routePoints);
    return;
  }

  updateElevationTitle(segments[activeSegment].title);
  const segmentPath = segmentRoutePaths[activeSegment] || segments[activeSegment].waypoints;
  requestElevation(segmentPath, segments[activeSegment].waypoints);
}

function updateElevationTitle(scope) {
  document.getElementById("elevationTitle").textContent = `Profil terenu - ${scope}`;
}

function requestElevation(path, fallbackPath = null, requestId = ++elevationRequestId) {
  if (!ElevationService || !path.length) {
    drawEmptyElevation("Biblioteka Elevation nie zostala zaladowana.");
    return;
  }
  const elevationPath = prepareElevationPath(path);
  if (elevationPath.length < 2) {
    drawEmptyElevation("Za malo punktow, aby pobrac profil wysokosci.");
    return;
  }

  const elevationService = new ElevationService();
  elevationService.getElevationAlongPath(
    {
      path: elevationPath,
      samples: 256,
    },
    (results, status) => {
      if (requestId !== elevationRequestId) return;

      if (status !== "OK" || !results?.length) {
        if (fallbackPath?.length) {
          console.warn(
            `ElevationService failed for detailed route (${status}). Retrying with planned stops.`,
          );
          requestElevation(fallbackPath, null, requestId);
          return;
        }
        showElevationError(status);
        return;
      }
      drawElevation(results.map((point) => point.elevation));
    },
  );
}

function prepareElevationPath(path) {
  const uniquePath = path
    .map(normalizePoint)
    .filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lng))
    .filter((point, index, points) => {
      if (index === 0) return true;
      const previous = points[index - 1];
      return point.lat !== previous.lat || point.lng !== previous.lng;
    });

  return downsamplePath(uniquePath, 140);
}

function downsamplePath(path, maxPoints) {
  if (path.length <= maxPoints) return path;

  const sampled = [];
  const lastIndex = path.length - 1;
  for (let i = 0; i < maxPoints; i += 1) {
    const sourceIndex = Math.round((i / (maxPoints - 1)) * lastIndex);
    sampled.push(path[sourceIndex]);
  }
  return sampled;
}

function normalizePoint(point) {
  const lat = typeof point.lat === "function" ? point.lat() : point.lat;
  const lng = typeof point.lng === "function" ? point.lng() : point.lng;
  return { lat, lng };
}

function showElevationError(status) {
  const messages = {
    REQUEST_DENIED:
      "REQUEST_DENIED: wlacz Elevation API dla projektu lub popraw ograniczenia klucza.",
    OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT: przekroczono limit zapytan Elevation API.",
    INVALID_REQUEST: "INVALID_REQUEST: Google odrzucilo parametry profilu wysokosci.",
    UNKNOWN_ERROR: "UNKNOWN_ERROR: tymczasowy blad Google Elevation API.",
  };
  const message = messages[status] || `Blad Google Elevation API: ${status || "brak statusu"}.`;
  drawEmptyElevation(message);
  document.getElementById("elevationStats").innerHTML = `<span>${message}</span>`;
  console.warn("ElevationService.getElevationAlongPath failed:", status);
}

function drawElevation(values) {
  const canvas = document.getElementById("elevationCanvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 30;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 1);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfaf7";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#d8d2c8";
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i += 1) {
    const y = padding + ((height - padding * 2) / 3) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  ctx.beginPath();
  values.forEach((value, index) => {
    const x = padding + (index / (values.length - 1)) * (width - padding * 2);
    const y = height - padding - ((value - min) / range) * (height - padding * 2);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(width - padding, height - padding);
  ctx.lineTo(padding, height - padding);
  ctx.closePath();
  ctx.fillStyle = "rgba(22, 127, 140, 0.18)";
  ctx.fill();

  ctx.beginPath();
  values.forEach((value, index) => {
    const x = padding + (index / (values.length - 1)) * (width - padding * 2);
    const y = height - padding - ((value - min) / range) * (height - padding * 2);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#167f8c";
  ctx.lineWidth = 3;
  ctx.stroke();

  const climb = values.reduce((sum, value, index) => {
    if (index === 0) return sum;
    return sum + Math.max(0, value - values[index - 1]);
  }, 0);
  const descent = values.reduce((sum, value, index) => {
    if (index === 0) return sum;
    return sum + Math.max(0, values[index - 1] - value);
  }, 0);

  document.getElementById("totalClimb").textContent = `${Math.round(climb)} m`;
  document.getElementById("elevationStats").innerHTML = `
    <span>min: ${Math.round(min)} m</span>
    <span>max: ${Math.round(max)} m</span>
    <span>suma podejsc: ${Math.round(climb)} m</span>
    <span>suma zjazdow: ${Math.round(descent)} m</span>
  `;
}

function drawEmptyElevation(message = "Wysokosci pojawia sie po podaniu dzialajacego klucza API.") {
  const canvas = document.getElementById("elevationCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fbfaf7";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#d8d2c8";
  ctx.strokeRect(0.5, 0.5, canvas.width - 1, canvas.height - 1);
  ctx.fillStyle = "#687478";
  ctx.font = "700 22px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Profil przewyzszen", canvas.width / 2, canvas.height / 2 - 8);
  ctx.font = "500 15px Inter, sans-serif";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2 + 22);
}

function showMapNotice() {
  document.getElementById("mapNotice").classList.add("is-visible");
}

function getGoogleMapsApiKey() {
  return window.TRIP_CONFIG?.googleMapsApiKey || localStorage.getItem("GOOGLE_MAPS_API_KEY") || "";
}

function loadGoogleMapsScript() {
  const apiKey = getGoogleMapsApiKey().trim();
  if (!apiKey || apiKey === "YOUR_GOOGLE_MAPS_API_KEY") {
    showMapNotice();
    return;
  }

  const script = document.createElement("script");
  const params = new URLSearchParams({
    key: apiKey,
    callback: "initTripMap",
    v: "weekly",
    loading: "async",
  });
  script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

window.gm_authFailure = showMapNotice;
initStaticUi();
loadGoogleMapsScript();
