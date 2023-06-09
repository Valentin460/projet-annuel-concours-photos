<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\AdvertisingPlacesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AdvertisingPlacesRepository::class)]
#[ApiResource()]
class AdvertisingPlaces
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $state = null;

    #[ORM\Column(length: 255)]
    private ?string $name_place = null;

    #[ORM\Column]
    private ?int $height_px = null;

    #[ORM\Column]
    private ?int $width_px = null;

    #[ORM\Column]
    private ?int $price_reference = null;

    #[ORM\OneToMany(mappedBy: 'advertising_places', targetEntity: Advertisements::class)]
    private Collection $advertisements;

    public function __construct()
    {
        $this->advertisements = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isState(): ?bool
    {
        return $this->state;
    }

    public function setState(bool $state): self
    {
        $this->state = $state;

        return $this;
    }

    public function getNamePlace(): ?string
    {
        return $this->name_place;
    }

    public function setNamePlace(string $name_place): self
    {
        $this->name_place = $name_place;

        return $this;
    }

    public function getHeightPx(): ?int
    {
        return $this->height_px;
    }

    public function setHeightPx(int $height_px): self
    {
        $this->height_px = $height_px;

        return $this;
    }

    public function getWidthPx(): ?int
    {
        return $this->width_px;
    }

    public function setWidthPx(int $width_px): self
    {
        $this->width_px = $width_px;

        return $this;
    }

    public function getPriceReference(): ?int
    {
        return $this->price_reference;
    }

    public function setPriceReference(int $price_reference): self
    {
        $this->price_reference = $price_reference;

        return $this;
    }

    /**
     * @return Collection<int, Annonce>
     */
    public function getAdvertisements(): Collection
    {
        return $this->advertisements;
    }

    public function addAnnonce(Advertisements $advertisements): self
    {
        if (!$this->advertisements->contains($advertisements)) {
            $this->advertisements->add($advertisements);
            $advertisements->setAdvertisingPlaces($this);
        }

        return $this;
    }

    public function removeAdvertisements(Advertisements $advertisements): self
    {
        if ($this->advertisements->removeElement($advertisements)) {
            // set the owning side to null (unless already changed)
            if ($advertisements->getAdvertisingPlaces() === $this) {
                $advertisements->setAdvertisingPlaces(null);
            }
        }

        return $this;
    }
}
